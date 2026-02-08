---
name: Social Media Content Generator
about: AI-powered social media post generator from blog entries
title: '[Feature] Social Media Content Generator from Blog Entries'
labels: enhancement, social-media, ai-automation
assignees: ''
---

## 🎯 Goal
Create an automated workflow where you upload an image and describe it to Copilot, which then generates engaging Facebook and Instagram captions optimized for maximum interaction.

## 📋 Requirements

### User Workflow
1. User adds a new image to the `images/YYYY-MM-DD/` directory
2. User tells Copilot: "Create a social media post about [flower/plant/garden update]"
3. Copilot generates:
   - Engaging caption for Facebook (longer, story-driven)
   - Concise caption for Instagram (hashtag-optimized)
   - Alt text for accessibility
   - Suggested posting times
   - Relevant hashtags (#flowers #gardening #hodgepodgefarms)

### Content Generation Features
- **Tone**: Warm, personal, educational (matching blog style)
- **Length**: 
  - Facebook: 100-200 words
  - Instagram: 50-100 words + 10-15 hashtags
- **Elements to include**:
  - What's blooming/growing
  - Why it's interesting
  - Call-to-action (visit website, ask questions)
  - Link to blog: https://enfcyco.github.io/Flowers/
- **Hashtag strategy**:
  - Mix of popular (#flowers #gardening #garden)
  - Niche (#hodgepodgefarms #iowagardens #cambridge)
  - Trending seasonal tags

### Output Format
Create a markdown file in `social-posts/YYYY-MM-DD-post-name.md` with:
```markdown
# [Post Title]

**Date**: YYYY-MM-DD
**Image**: images/YYYY-MM-DD/filename.jpeg

## Facebook Post

[Caption with story and link]

**Posting Tips**:
- Best time: [suggested times]
- Expected reach: [estimate]

## Instagram Post

[Shorter caption]

#flowers #gardening #hodgepodgefarms #iowagardens #cambridge #plantlover #gardenlife #pollinators #growyourown #farmlife

**Posting Tips**:
- Best time: [suggested times]
- Story opportunity: [yes/no]
- Reel opportunity: [yes/no]
```

## 🔧 Implementation Notes

### GitHub Copilot Integration
- User can simply say: "Generate social media post for the Feb 5 2026 Bachelor Button image"
- Copilot reads the blog entry from `index.html`
- Generates content based on the existing description
- Creates the output file automatically

### Content Guidelines
- Reference the blog post for accuracy
- Maintain authentic farm voice
- Include educational facts about plants
- Encourage engagement (questions, comments)
- Always link back to website

## ✅ Acceptance Criteria
- [ ] User can request post generation via Copilot chat
- [ ] Generated posts are engaging and on-brand
- [ ] Output includes both Facebook and Instagram versions
- [ ] Hashtags are relevant and optimized
- [ ] Links to website are included
- [ ] Files are organized in `social-posts/` directory

## 📚 Related Issues
- #2 Image upload and optimization automation
- #3 Facebook and Instagram post formatter
- #4 Social media preview optimization

## 💡 Future Enhancements
- A/B testing suggestions
- Engagement prediction scoring
- Automatic scheduling integration
- Multi-image carousel posts
