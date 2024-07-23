import { NextResponse } from "next/server";

export async function middleware(request) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // Define the login route
  const loginRoute = "/login";

  // Extract the token from the cookies
  let token = request.cookies.get("access_token")?.value;

  // Check if the token is in the query parameters
  if (!token) {
    token = url.searchParams.get("token");
  }

  // Function to redirect to login with redirect URL parameter and optional trxref
  const redirectToLogin = (trxref = null) => {
    url.pathname = loginRoute;
    url.searchParams.set("redirect", pathname);
    if (trxref) {
      url.searchParams.set("trxref", trxref);
    }
    return NextResponse.redirect(url);
  };

  // Handle /courses/verify route specifically
  if (pathname === "/courses/verify") {
    const trxref = url.searchParams.get("trxref");

    if (!token) {
      return redirectToLogin(trxref);
    }

    try {
      // Send the request to the server to check token validity
      const response = await fetch(request.url, {
        method: request.method,
        headers: {
          ...Object.fromEntries(request.headers.entries()),
          Authorization: `Bearer ${token}`,
        },
        body: request.body,
      });

      if (response.ok) {
        // Continue with the request
        return NextResponse.next();
      } else {
        // Redirect to login on unauthorized or bad request, with redirect URL parameter and trxref
        return redirectToLogin(trxref);
      }
    } catch (error) {
      // Handle fetch errors
      console.error("Token validation failed:", error);
      return redirectToLogin(trxref);
    }
  }

  // General handling for other protected routes
  if (
    pathname.includes("register") ||
    pathname.includes("pay") ||
    pathname.includes("verify") ||
    pathname.startsWith("/dashboard")
  ) {
    if (!token) {
      return redirectToLogin();
    }

    try {
      // Send the request to the server to check token validity
      const response = await fetch(request.url, {
        method: request.method,
        headers: {
          ...Object.fromEntries(request.headers.entries()),
          Authorization: `Bearer ${token}`,
        },
        body: request.body,
      });

      if (response.ok) {
        // Continue with the request
        return NextResponse.next();
      } else {
        // Redirect to login on unauthorized or bad request, with redirect URL parameter
        return redirectToLogin();
      }
    } catch (error) {
      // Handle fetch errors
      console.error("Token validation failed:", error);
      return redirectToLogin();
    }
  }

  // If the request is for the login route or other non-protected routes, continue with the request
  return NextResponse.next();
}

// Specify the paths where the middleware should run
export const config = {
  matcher: ["/courses/:id/:path*", "/dashboard/my-courses", "/courses/verify"],
};
