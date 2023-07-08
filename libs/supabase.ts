import { createClientComponentClient, createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "./database.types";

export const serverComponentClient = createServerComponentClient<Database>({cookies})

export const serverActionClient = createServerActionClient<Database>({cookies})

export const clientComponentClient = createClientComponentClient<Database>()
