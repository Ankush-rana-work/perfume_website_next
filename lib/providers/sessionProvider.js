
"use client";
import {SessionProvider} from "next-auth/react";
import { useEffect, useState } from "react";

export function NextProviders({children}) {
  return <SessionProvider>{children}</SessionProvider>;
}