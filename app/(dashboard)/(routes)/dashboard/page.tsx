"use client";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  FileVideo,
  ImageIcon,
  MessageSquare,
  Music,
  PenLine,
  VideoIcon,
} from "lucide-react";

const tools = [
  {
    label: "Consultant",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-580/18",
    href: "/consultant",
  },
  {
    label: "Coder",
    icon: Code,
    href: "/coder",
    color: "text-green-700",
  },
  {
    label: "CopyWriting",
    icon: PenLine,
    href: "/copywrite",
    color: "text-yellow-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Animation Generation",
    icon: FileVideo,
    href: "/animation",
    color: "text-lime-500",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Use the most powerful AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Link href={tool.href} key={tool.href}>
            <Card
              key={tool.href}
              className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
