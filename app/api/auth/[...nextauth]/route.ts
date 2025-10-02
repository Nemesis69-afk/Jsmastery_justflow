// app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth"; // your src/auth.ts
export const { GET, POST } = handlers;

// If using Node-only providers/features, force Node runtime:
export const runtime = "nodejs"; // optional, see notes below
