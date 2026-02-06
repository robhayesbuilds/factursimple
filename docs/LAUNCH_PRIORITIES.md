# FacturSimple Launch Priorities

*Created: 2026-02-06 | Status: Waiting on Vercel fix*

## 🚀 When Vercel is Fixed (Priority Order)

### Immediate (Day 1)
1. **Verify all 24 blog articles are live**
   - Check sitemap.xml includes all new URLs
   - Test each article loads correctly
   - Verify internal links work

2. **Verify /outils page is live**
   - Check all 8 tools accessible from index
   - Test each tool's basic functionality

3. **Submit sitemap to Google Search Console**
   - `https://factursimple.fr/sitemap.xml`
   - Request indexing for key pages

### Short-term (Week 1)
4. **Community Validation - ae.fr Forum**
   - Priority #1 community: first-mover on 2026 reform topic
   - Post helpful guide (value-first, no pitch)
   - Use template from `research/ae-forum-post-feb2026.md`

5. **Discord Engagement**
   - Join "Entrepreneurs Francophones" server
   - Lurk first, then contribute when relevant
   - DON'T pitch - just be helpful

6. **CommentCaMarche Forum Reply**
   - Active thread with real pain points
   - Use reply template from `research/commentcamarche-reply-draft.md`

### Medium-term (Weeks 2-4)
7. **Comparison Site Outreach**
   - Get listed on Selectra (high authority)
   - See `docs/comparison-site-outreach.md`

8. **Podcast Outreach**
   - Target: BFM Business "Podcast des Auto-Entrepreneurs"
   - Target: "La Micro By Flo"
   - See `research/podcast-outreach-emails.md`

9. **X/Twitter Content**
   - Ready threads in `research/x-thread-*.md`
   - Need password for @robhayesbuilds

---

## 📊 Current Assets Ready

| Asset | Count | Status |
|-------|-------|--------|
| SEO blog articles | 24 | ✅ Code ready, waiting deploy |
| Free tools | 8 | ✅ Code ready, waiting deploy |
| X threads | 3 | ✅ Ready to post |
| LinkedIn posts | 2 | ✅ Ready to post |
| Forum templates | 4 | ✅ Ready to use |
| Podcast emails | 3 | ✅ Ready to send |
| Community targets | 12+ | ⏳ Need manual join |
| Competitor battlecards | 3 | ✅ Complete |

---

## 🎯 Success Metrics (First Month)

- [ ] 50+ waitlist signups
- [ ] 3+ forum threads where we're mentioned/helpful
- [ ] Listed on 1+ comparison site
- [ ] 100+ organic sessions from Google
- [ ] 5+ feedback conversations with real AEs

---

## ⚠️ Current Blockers

1. **Vercel not auto-deploying** (CRITICAL)
   - Last deploy: Feb 5, 12:53 UTC
   - Articles 18-24 not live
   - /outils page not live

2. **Reddit IP blocked** (datacenter)
   - Need residential proxy or local browser

3. **X/Twitter** needs password for @robhayesbuilds

4. **No Upstash Redis** - waitlist not persistent
   - Database created but env vars not in Vercel
