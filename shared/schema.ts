import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type PerformanceLevel = "High" | "Medium" | "Low";

export type ContentIdea = {
  id: string;
  trendTitle: string;
  trendSummary: string;
  ideas: string[];
  hooks: string[];
  performance: PerformanceLevel;
  niche: string;
  generatedAt: Date;
};

export type Niche = {
  id: string;
  name: string;
  icon: string;
};
