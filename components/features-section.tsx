"use client";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  ArrowUp,
  Globe,
  Play,
  Plus,
  Signature,
  Sparkles,
  GitFork,
  Eye,
  Star,
  Brain,
  Workflow,
  Zap,
  Database,
  Shield,
  Plug,
  Bot,
  Search,
  Download,
  Filter,
  Clock,
  Target,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features">
      <div className="py-24">
        <div className="mx-auto w-full max-w-3xl px-6">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground text-balance text-3xl font-semibold md:text-4xl"
          >
            <span className="text-muted-foreground">
              AI-Powered Web Scraping Made Simple
            </span>{" "}
            Workflow Features
          </motion.h2>
          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            {/* Feature 1 */}
            <div className="col-span-full space-y-4">
              <Card className="overflow-hidden px-6 sm:col-span-2">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mask-b-from-75% mx-auto -mt-2 max-w-sm px-2 pt-8"
                >
                  <SmartScrapingIllustration />
                </motion.div>
              </Card>
              <div className="max-w-md sm:col-span-3">
                <motion.h3 className="text-foreground text-lg font-semibold">
                  Intelligent Data Extraction Engine
                </motion.h3>
                <motion.p className="text-muted-foreground mt-3 text-balance">
                  Our AI understands web page structure and extracts the data
                  you need without complex selectors or coding.
                </motion.p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="grid grid-rows-[1fr_auto] space-y-4">
              <Card className="p-6">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <WorkflowBuilderIllustration />
                </motion.div>
              </Card>
              <div>
                <h3 className="text-foreground text-lg font-semibold">
                  Visual Workflow Builder Interface
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Design complex scraping workflows with drag-and-drop
                  simplicity and real-time monitoring.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="grid grid-rows-[1fr_auto] space-y-4">
              <Card className="overflow-hidden p-6">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <DataPipelineIllustration />
                </motion.div>
              </Card>
              <div>
                <h3 className="text-foreground text-lg font-semibold">
                  Seamless Data Pipeline Integration
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Export to any format or connect directly to your databases
                  and analytics tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SmartScrapingIllustration = () => {
  return (
    <Card
      aria-hidden
      className="p-4 transition-transform duration-200 group-hover:translate-y-0"
    >
      {/* AI Engine Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="bg-foreground/5 flex size-8 items-center justify-center rounded-lg border">
          <Bot className="size-4 text-foreground/60" />
        </div>
        <div>
          <div className="text-sm font-medium">AI Scraping Engine</div>
          <div className="text-muted-foreground text-xs">Smart extraction active</div>
        </div>
      </div>

      {/* Detection Stats */}
      <div className="mb-4 flex gap-4 text-muted-foreground">
        <div className="flex items-center gap-1">
          <Target className="size-3" />
          <span className="text-xs">98.5%</span>
        </div>
        <div className="flex items-center gap-1">
          <Search className="size-3" />
          <span className="text-xs">1.2M</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="size-3" />
          <span className="text-xs">0.3s</span>
        </div>
      </div>

      {/* Data Detection */}
      <div className="bg-foreground/5 rounded-lg p-3 space-y-2 border">
        <div className="text-muted-foreground text-xs font-medium mb-2">
          Detected Elements
        </div>
        <div className="space-y-1.5 text-xs">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-foreground/20 size-1.5 rounded-full"></div>
            <span>Product titles (247)</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-foreground/20 size-1.5 rounded-full"></div>
            <span>Prices &#40;247&#41;</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-foreground/20 size-1.5 rounded-full"></div>
            <span>Images &#40;247&#41;</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-foreground/20 size-1.5 rounded-full"></div>
            <span>Reviews &#40;189&#41;</span>
          </div>
        </div>
      </div>

      {/* Status Badge */}
      <div className="mt-3 flex justify-center">
        <div className="bg-foreground/10 text-foreground/80 px-2 py-1 rounded-full text-xs font-medium border">
          Auto-Detection ON
        </div>
      </div>
    </Card>
  );
};

const WorkflowBuilderIllustration = () => {
  return (
    <Card aria-hidden className="p-4">
      {/* Workflow Header */}
      <div className="mb-4 flex justify-center">
        <div className="bg-foreground/10 flex size-10 items-center justify-center rounded-full border">
          <Workflow className="size-5 text-foreground/60" />
        </div>
      </div>

      {/* Workflow Status */}
      <div className="mb-4 text-center">
        <div className="text-sm font-medium">Scraping Workflow</div>
        <div className="text-muted-foreground text-xs flex items-center justify-center gap-1 mt-1">
          <div className="bg-foreground/40 size-1.5 rounded-full"></div>
          Running &#40;3/4 steps&#41;
        </div>
      </div>

      {/* Workflow Steps */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
            {/* <Globe className="size-3 text-foreground/60" /> */}
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-foreground/80">
              Page Navigation
            </div>
            <div className="bg-foreground/10 h-1 rounded-full mt-1">
              <div className="bg-foreground/40 h-full w-full rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
            {/* <Search className="size-3 text-foreground/60" /> */}
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-foreground/80">
              Data Extraction
            </div>
            <div className="bg-foreground/10 h-1 rounded-full mt-1">
              <div className="bg-foreground/40 h-full w-3/4 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
            {/* <Filter className="size-3 text-foreground/60" /> */}
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-foreground/80">
              Data Processing
            </div>
            <div className="bg-foreground/10 h-1 rounded-full mt-1">
              <div className="bg-foreground/40 h-full w-1/2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-4 text-center">
        <div className="text-muted-foreground text-xs">
          Processing 1,247 items...
        </div>
      </div>
    </Card>
  );
};

const DataPipelineIllustration = () => {
  return (
    <div aria-hidden className="relative">
      {/* Main Integration Hub */}
      <Card className="p-4">
        <div className="mb-3 flex items-center justify-center">
          <div className="bg-foreground/10 flex size-8 items-center justify-center rounded-full border">
            <Download className="size-4 text-foreground/60" />
          </div>
        </div>

        <div className="text-center mb-4">
          <div className="text-sm font-medium">Data Export Pipeline</div>
          <div className="text-muted-foreground text-xs">Real-time sync enabled</div>
        </div>

        {/* Export Options */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <Database className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              SQL Database
            </div>
          </div>
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <Shield className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              Secure API
            </div>
          </div>
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <Sparkles className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              Analytics
            </div>
          </div>
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <Plus className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              Custom Hook
            </div>
          </div>
        </div>
      </Card>

      {/* Connection Lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-foreground/10 h-px w-full"></div>
      </div>
    </div>
  );
};