# AI Image Generation Prompts for Portfolio Assets

This document contains all the prompts for generating customized assets for the portfolio website using AI image generation tools.

## Background Video/Media

### Main Background Video (1920x1080px)
```
Create a dark, tech-oriented animation showing video streaming technology in action. Visual elements should include: HLS/DASH streaming protocol visualization, video encoding process with bitrate ladders, multiple video feed displays merging into a single player, and video quality metrics. Use a color scheme matching Hyper Term Black theme with deep blacks, subtle purples, and blue terminal-style accents. Make it abstract enough for a website background but clearly connected to video streaming engineering. Resolution: 1920x1080. Style: Dark, professional, futuristic, with subtle tech grid lines and data visualization aesthetics.
```

## Company Icons (600x600px, transparent background)

### fuboTV Inc. (Engineering Lead roles)
```
Create a minimalist, professional logo for fuboTV Inc. in the style of a tech company. Use a dark background with neon purple and blue accents. The design should reflect streaming technology and sports content. Make it clean and modern with a slight tech glow effect, suitable for a professional portfolio.
```

### Koda Labs Inc.
```
Design a sleek, modern logo for Koda Labs Inc., a mobile app development company. Use a geometric design with a tech-focused aesthetic. Colors should include dark background with accent colors that pop (cyan, purple). Include subtle elements that suggest mobile and game development.
```

### United States Marine Corps Reserve
```
Create a professional, respectful representation of the United States Marine Corps emblem. Design should be simplified but recognizable, with the Eagle, Globe and Anchor in a style that fits a tech-oriented portfolio. Use a dark background with gold/silver accents for the emblem itself.
```

## Project Images (1200x800px)

### JIT Transcoding and Packaging
```
Create a technological illustration depicting just-in-time video transcoding and packaging. Show a visual representation of HEVC video files being processed and transformed into HLS streaming packages. Include Kubernetes container elements and cloud infrastructure components. Use a dark tech aesthetic with data flow visualizations and terminal-like UI elements. Style: Professional, technical, with streaming technology diagram elements.
```

### Server-side Multi-view Systems
```
Create a professional visualization of a multi-view video streaming system. Show multiple camera angles/video feeds flowing into a single consolidated player interface. Include elements that suggest sports viewing with different angles, technical backend infrastructure, and user controls. Use a dark interface with streaming data visuals and Hyper Term Black color scheme. Style: Clean, modern tech, focused on video engineering.
```

### VOD Encoding & Operations Pipeline
```
Create a detailed technical illustration of a VOD (Video On Demand) encoding and delivery pipeline. Show content ingestion, transcoding processes with multiple output formats (HLS, DASH), DRM protection application, and delivery to various devices. Include AWS cloud infrastructure elements and container orchestration visuals. Use a dark technical aesthetic with data flow diagrams and pipeline visualization. Style: Enterprise-grade, technical, system architecture visualization.
```

## Talk & Podcast Images (800x450px)

### HLS & DASH Multi Codec Encoding
```
Create a professional tech presentation thumbnail for a talk on HLS & DASH Multi Codec Encoding. Include visual elements of streaming protocols, codec comparisons (H.264, HEVC, VP9), and packaging formats. Use a dark tech aesthetic with code elements and streaming technology visuals. Add a clean title overlay with "HLS & DASH Multi Codec Encoding & Packaging" in a modern tech font.
```

### Deep Dive into Video Streaming Technologies
```
Design a compelling tech presentation thumbnail for "Deep Dive into Video Streaming Technologies." Show layers of streaming infrastructure from encoding to delivery. Include networking elements, CDN architecture, and playback devices. Use a dark blue to black gradient background with tech-inspired graphics and clean typography. Style: Educational, technical, professional.
```

### The Video Insiders Podcast
```
Create a professional podcast cover for "The Video Insiders: Exploring Streaming Video Technologies." Design should include audio waveform elements combined with video streaming visuals. Use a dark theme with accent colors, microphone imagery subtly integrated with video technology elements. Include the podcast title prominently but professionally designed.
```

## Blog Article Images (800x450px)

### Optimizing Video Streaming
```
Create a professional technical blog header image about "Optimizing Video Streaming with HEVC and AVC." Show a visual comparison between the two codecs with quality and efficiency metrics. Include elements of bandwidth usage, quality comparison, and device compatibility. Use a dark tech aesthetic with data visualization elements. Style: Analytical, technical, educational.
```

### Server-Side Multi-View Systems
```
Design a technical blog header image about "Server-Side Multi-View Systems for Enhanced Sports Viewing." Illustrate multiple camera angles of a sports event converging into a single viewer interface with user controls. Show the technical implementation with server architecture in the background. Use a dark theme with bright accent colors highlighting the multiple views. Style: Technical, innovative, user-experience focused.
```

### Kubernetes for Video Processing
```
Design a technical blog header image for "Kubernetes for Video Processing." Illustrate container orchestration specifically for video transcoding workloads. Show Kubernetes pods processing video segments in parallel, load balancing, and autoscaling based on demand. Use dark tech colors with Kubernetes' signature blue accents. Style: Cloud-native, technical, infrastructure-focused.
```

## Asset Placement Guide

| Asset Type | Dimensions | File Format | Directory Location |
|------------|------------|-------------|-------------------|
| Company Icons | 600x600px | PNG with transparency | `/src/assets/company/` |
| Project Images | 1200x800px | JPG or PNG | `/src/assets/` |
| Talk/Podcast Images | 800x450px | JPG or PNG | `/src/assets/article/` |
| Blog Images | 800x450px | JPG or PNG | `/src/assets/article/` |
| Background Video | 1920x1080px | WebM | `/src/assets/` |
| Background Video (Mobile) | 1080x1920px | WebM | `/src/assets/` |
| Background Image Fallback | 1920x1080px | JPG | `/src/assets/` |

## Naming Convention

When you generate these assets, use the following naming convention to replace the existing placeholder files:

- Company Icons: `[company-name-lowercase].png` (e.g., `fubotv.png`, `kodalabs.png`, `usmc.png`)
- Project Images: `[project-name-lowercase].png` (e.g., `jit-transcoding.png`, `multiview.png`, `vod-pipeline.png`)
- Talk/Podcast Images: `article1.jpg`, `article2.jpg`, `article3.jpg` (to match existing imports)
- Background: Keep the existing file names (`herobg.webm`, `herobg.jpg`, etc.)
