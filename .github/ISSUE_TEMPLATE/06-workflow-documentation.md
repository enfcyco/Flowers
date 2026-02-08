---
name: Social Media Posting Workflow & Documentation
about: Complete guide and checklist for the entire social media posting process
title: '[Documentation] Social Media Posting Workflow Guide'
labels: documentation, social-media, workflow
assignees: ''
---

## 🎯 Goal
Create comprehensive documentation that ties all the social media features together into a smooth, repeatable workflow that takes 10 minutes or less from "I have a new blog entry" to "Posts are live on social media."

## 📋 Complete Workflow

### Phase 1: Content Creation (Issues #1 & #2)
```
1. Add blog entry to index.html
2. Add images to images/YYYY-MM-DD/
3. Run: npm run optimize-images
   ✓ Web, Instagram, and Facebook versions created
4. Commit changes to repository
```

### Phase 2: Social Media Content Generation (Issues #1 & #3)
```
5. Tell Copilot: "Generate social media post for [blog entry]"
   ✓ Draft created in social-posts/
6. Review and edit if needed
7. Tell Copilot: "Format this post for copy-paste"
   ✓ Ready-to-post version created with all formatting
```

### Phase 3: Posting (Issue #4)
```
8. Open social-posts/YYYY-MM-DD-post-name-ready.md
9. Copy Instagram section
10. Paste into Instagram app
11. Upload images/YYYY-MM-DD/filename-instagram.jpeg
12. Post at recommended time
13. Repeat for Facebook with Facebook section
```

### Phase 4: Tracking (Issue #5)
```
14. Wait 24-48 hours for engagement
15. Record performance in analytics/social-media-log.md
16. Update insights in analytics/dashboard.md
```

**Total Time**: ~10 minutes (excluding wait time for engagement)

## 📚 Documentation Files to Create

### 1. `docs/SOCIAL-MEDIA-GUIDE.md`
Complete guide with:
- Step-by-step instructions
- Screenshots/examples
- Troubleshooting tips
- Best practices
- FAQ

### 2. `docs/COPILOT-PROMPTS.md`
List of useful Copilot prompts:
```markdown
# Copilot Prompts for Social Media

## Image Optimization
- "Optimize all new images in the images directory"
- "Generate Instagram and Facebook versions of today's images"

## Content Generation
- "Create social media posts for the [date] blog entry"
- "Generate engaging caption for the Bachelor Button photo"
- "Write educational post about pollinators"

## Formatting
- "Format the latest social post for copy-paste"
- "Create ready-to-post version with hashtags"

## Analytics
- "Log today's Instagram performance"
- "Show me this month's top performing posts"
- "What time should I post tomorrow?"
- "Generate February analytics report"

## Maintenance
- "Update social preview metadata for latest post"
- "Generate shareable link for Feb 5 blog entry"
```

### 3. `SOCIAL-MEDIA-CHECKLIST.md` (in root)
Quick reference checklist:
```markdown
# Social Media Posting Checklist

## ✅ Before Posting
- [ ] Blog entry added to index.html
- [ ] Images added to images/YYYY-MM-DD/
- [ ] Images optimized (run `npm run optimize-images`)
- [ ] Changes committed to repository
- [ ] Social media post generated
- [ ] Post formatted for copy-paste
- [ ] Preview checked for typos/errors

## ✅ Posting
- [ ] Instagram post scheduled/posted
- [ ] Facebook post scheduled/posted
- [ ] Link shared to Stories (optional)
- [ ] Engaged with first few comments

## ✅ After Posting (24-48hrs)
- [ ] Logged performance metrics
- [ ] Updated analytics dashboard
- [ ] Noted insights for future posts
- [ ] Responded to all comments
```

### 4. `docs/BEST-PRACTICES.md`
Content strategy guide:
```markdown
# Social Media Best Practices for Hodge Podge Farms

## Content Types That Perform Best
1. **Harvest Photos** (⭐⭐⭐⭐⭐)
   - Show results/abundance
   - Bright colors
   - Variety of items

2. **Discovery Moments** (⭐⭐⭐⭐⭐)
   - Wild bee colony
   - Unexpected blooms
   - Nature surprises

3. **Planting/Seeds** (⭐⭐⭐⭐)
   - Seasonal planning
   - Educational value
   - Future anticipation

4. **Educational Posts** (⭐⭐⭐⭐)
   - Plant care tips
   - Pollinator info
   - Growing advice

## Writing Style
- ✅ Warm and personal (like chatting with a neighbor)
- ✅ Include anecdotes (Matt's bee hive!)
- ✅ Educational but accessible
- ✅ Ask questions to drive engagement
- ❌ Avoid jargon
- ❌ Don't oversell
- ❌ No clickbait

## Hashtag Strategy
- Use 10-15 hashtags on Instagram
- Use 3-7 hashtags on Facebook
- Mix of:
  - Niche: #hodgepodgefarms #iowagardens #cambridge
  - Medium: #pollinators #growyourown #farmlife
  - Broad: #flowers #gardening #garden

## Timing
- **Instagram**: Mon-Fri 11am, Sat 10am, Sun 4pm
- **Facebook**: Wed 1pm, Thu 1pm, Sun 5pm
- Avoid: Before 9am, after 8pm, Tuesday mornings

## Engagement
- Respond to comments within 2 hours
- Like all comments
- Ask follow-up questions
- Share user content (with permission)
```

## 🎓 Quick Start Guide

Create `QUICK-START.md`:
```markdown
# Social Media Quick Start

New to this workflow? Start here!

## 1. First Time Setup (5 minutes)
```bash
cd /path/to/Flowers
npm install
```

## 2. Add Your First Post (10 minutes)
1. Take photos with your phone
2. Upload to images/2026-02-XX/
3. Run `npm run optimize-images`
4. Tell Copilot: "Generate social post for today's blog entry"
5. Tell Copilot: "Format this for copy-paste"
6. Copy & paste to Instagram/Facebook

## 3. Track Performance (2 minutes, after 24hrs)
1. Tell Copilot: "Log performance for today's post"
2. Enter your metrics when prompted

## 4. Review Insights (5 minutes, end of month)
1. Tell Copilot: "Show me this month's analytics"
2. Read the insights
3. Plan next month's content

That's it! 🎉
```

## 🔧 Directory Structure

After implementation, the repository should look like:
```
Flowers/
├── .github/
│   ├── ISSUE_TEMPLATE/       (These issues!)
│   └── workflows/
├── analytics/
│   ├── social-media-log.md   (Issue #5)
│   └── dashboard.md          (Issue #5)
├── docs/
│   ├── SOCIAL-MEDIA-GUIDE.md
│   ├── COPILOT-PROMPTS.md
│   └── BEST-PRACTICES.md
├── images/                    (Issue #2)
├── scripts/
│   ├── optimize-images.js     (Issue #2)
│   ├── format-post.js         (Issue #3)
│   └── generate-social-meta.js (Issue #4)
├── social-posts/
│   ├── 2026-02-05-bachelor-button.md       (Issue #1)
│   └── 2026-02-05-bachelor-button-ready.md (Issue #3)
├── index.html
├── package.json               (Issue #2)
├── SOCIAL-MEDIA-CHECKLIST.md
└── QUICK-START.md
```

## ✅ Acceptance Criteria
- [ ] Complete workflow documented end-to-end
- [ ] Quick reference checklist available
- [ ] Copilot prompts documented
- [ ] Best practices guide created
- [ ] Quick start guide for new users
- [ ] Directory structure documented
- [ ] Examples included for each step
- [ ] Troubleshooting section included

## 📚 Related Issues
This issue ties together:
- #1 Social Media Content Generator
- #2 Image upload and optimization automation
- #3 Facebook and Instagram post formatter
- #4 Social media preview optimization
- #5 Analytics and engagement tracking

## 💡 Future Enhancements
- Video tutorial walkthrough
- Troubleshooting flowchart
- Template library (seasonal posts, event announcements)
- Content calendar template
- Collaboration guide (for multiple team members)
