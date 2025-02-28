// "use client";

// import { plusJakartaSans } from "@/app/ui/fonts";
// import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
// import { Button } from "@/app/ui/button";
// import { useActionState } from "react";
// import { authenticate } from "@/app/lib/actions";
// import { useSearchParams } from "next/navigation";

// export default function LoginForm() {
//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
//   const [errorMessage, formAction, isPending] = useActionState(
//     authenticate,
//     undefined
//   );

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     try {
//       const formData = new FormData(event.target as HTMLFormElement);
//       await formAction(formData);

//       if (!isPending && !errorMessage) {
//         window.location.href = "/masterdata";
//       }
//     } catch (error) {
//       console.error("Login failed", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-3">
//       <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
//         <h1 className={`${plusJakartaSans.className} mb-3 text-2xl`}>Login</h1>
//         <div className="w-full">
//           <div>
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-900"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500"
//                 id="email"
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email address"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mt-4">
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-900"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500"
//                 id="password"
//                 type="password"
//                 name="password"
//                 placeholder="Enter password"
//                 required
//                 minLength={6}
//               />
//             </div>
//           </div>
//         </div>
//         <input type="hidden" name="redirectTo" value={callbackUrl} />
//         <Button
//           className="mt-4 w-full flex justify-center items-center"
//           aria-disabled={isPending}
//         >
//           Log in
//         </Button>
//         <div
//           className="flex h-8 items-end space-x-1"
//           aria-live="polite"
//           aria-atomic="true"
//         >
//           {errorMessage && (
//             <>
//               <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
//               <p className="text-sm text-red-500">{errorMessage}</p>
//             </>
//           )}
//         </div>
//       </div>
//     </form>
//   );
// }

"use client";

import { plusJakartaSans } from "@/app/ui/fonts";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { useState } from "react";

const users: { email: string; password: string; role: string }[] = [
  { email: "pun@gmail.com", password: "123456", role: "admin" },
  { email: "pun2@gmail.com", password: "123456", role: "requester" },
];

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);

    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email")?.toString() || "";
      const password = formData.get("password")?.toString() || "";

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        window.location.href =
          user.role === "admin" ? "/masterdata" : "/request";
      } else {
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      console.error("Login failed", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${plusJakartaSans.className} mb-3 text-2xl`}>Login</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <Button
          className="mt-4 w-full flex justify-center items-center"
          aria-disabled={isPending}
        >
          Log in
        </Button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
