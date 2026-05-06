# AI Tool Pricing Dataset

## Purpose

This document serves as the source-of-truth pricing reference for the Credex AI Spend Audit platform.

The pricing information collected here will later power:

- Spend calculations
- Overspend detection
- Redundancy analysis
- Recommendation generation
- Savings estimation

---

# OpenAI

## ChatGPT Plus

**Price:** $20/month per user

**Intended for:**

- Individual users
- Professionals
- Students

**Features:**

- GPT-4 access
- Faster responses
- File uploads
- Data analysis tools

### Common Usage Pattern

Frequently used alongside:

- Claude Pro
- Cursor Pro

### Potential Optimization Risk

Users may pay for multiple AI assistants with overlapping capabilities.

---

## ChatGPT Team

**Price:** Approximately $25-$30/user/month

**Intended for:**

- Startups
- Small teams

**Features:**

- Shared workspace
- Team management
- Collaboration tools

### Optimization Consideration

Small teams may not fully utilize collaboration features.

---

## OpenAI API Pricing

### GPT-4.1

**Input tokens:** Variable pricing  
**Output tokens:** Variable pricing

### Common Use Cases

- AI chatbots
- SaaS integrations
- Automation tools

### Overspend Risk

Poor prompt optimization can significantly increase token costs.

---

# Anthropic Claude

## Claude Pro

**Price:** $20/month

**Features:**

- Extended usage limits
- Advanced reasoning
- Long context support

### Common Usage Pattern

Often purchased alongside ChatGPT Plus.

### Potential Redundancy

Users may not need both Claude Pro and ChatGPT Plus simultaneously.

---

## Claude Team

**Price:** Approximately $25-$30/user/month

**Features:**

- Team collaboration
- Shared conversations
- Centralized billing

### Optimization Consideration

Small teams may overpay for unused collaboration features.

---

# GitHub Copilot

## Copilot Individual

**Price:** $10/month

**Features:**

- AI code completion
- Developer productivity support

### Primary Users

- Software engineers
- Students
- Freelancers

---

## Copilot Business

**Price:** $19/user/month

**Features:**

- Organization-wide management
- Security controls
- Team administration

### Optimization Consideration

May overlap with Cursor Pro functionality.

---

# Cursor

## Cursor Pro

**Price:** Approximately $20/month

**Features:**

- AI-powered IDE
- Code generation
- AI-assisted debugging

### Common Usage Pattern

Frequently combined with:

- Copilot
- ChatGPT Plus

### Potential Redundancy

Teams may pay for multiple coding assistants simultaneously.

---

# Key Market Observations

## Observation 1

Many startups purchase the following simultaneously without clear usage boundaries:

- ChatGPT Plus
- Claude Pro
- Cursor Pro
- Copilot

## Observation 2

Small teams often upgrade to Team plans too early.

## Observation 3

Most users do not actively track:

- API token spending
- Inactive subscriptions
- Overlapping AI tool functionality

---

# Audit Logic Implications

The audit engine should focus on:

1. Redundant subscriptions
2. Underutilized team plans
3. Duplicate AI assistant functionality
4. API overspending risks
5. Rightsizing opportunities

---

# Notes

This document will evolve during development as:

- Pricing changes
- User interviews reveal new patterns
- Additional AI tools are analyzed
