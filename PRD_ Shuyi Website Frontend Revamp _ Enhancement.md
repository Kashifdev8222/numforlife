# **PRD: Shuyi Website Frontend Revamp — Next.js, Drag-and-Drop CMS, Admin Dashboard, Tarot Web, Membership Optimization \- NUMFORLIFE.COM**

## **1\. Product Name**

Shuyi Website Frontend Revamp

## **2\. Updated Product Decision**

Shuyi will no longer use Elementor or WordPress as the main frontend website stack.

The website should be rebuilt as a modern, maintainable, API-driven web frontend using Next.js, React, TypeScript, and a reusable component system.

The existing PHP backend should remain as the business logic and API layer for the current phase.

The website should support selected drag-and-drop content editing for marketing and content sections, but core product logic such as tarot, 数易测算, membership entitlement, payment, user records, and authentication should remain controlled by backend APIs and frontend code.

The mobile app remains the main Shuyi product experience. The website should support preview, acquisition, SEO, user education, limited interaction, and conversion into the app.

## **3\. Main Objective**

The objective is to rebuild the Shuyi website into a faster, cleaner, more maintainable, mobile-first, SEO-friendly, app-connected frontend.

The new website should support:

Light mode and dark mode  
Simple 测算 preview  
Tarot lite website experience  
Partial 测算记录 preview  
Membership page and upgrade prompts  
Lightweight user dashboard  
Admin dashboard / back office  
Drag-and-drop content editing for marketing sections  
App download and open-app conversion  
Backend API integration  
SEO landing pages  
Analytics tracking  
Reusable frontend components  
Clear separation between frontend display and backend business logic

## **4\. Business Justification**

The reason for moving away from Elementor and WordPress is not only to avoid Elementor’s yearly fee.

Avoiding Elementor’s yearly subscription cost is a supporting reason, but the stronger reason is that Shuyi’s website is becoming more interactive and product-driven.

The website now needs tarot preview, calculation flows, membership display, user dashboard, partial records, app deep links, dark mode, analytics, and reusable UI components. These requirements are better handled by a modern frontend stack such as Next.js instead of WordPress and Elementor.

The key business reasons are:

Better long-term maintainability  
Less plugin dependency  
Better frontend control  
Better performance  
Better mobile responsiveness  
Better API integration  
Better support for app-like website features  
Better ability to match the Flutter app design  
Cleaner future developer handover  
Lower recurring plugin dependency

Elementor fee saving is a bonus. The main reason is scalability, maintainability, performance, and product flexibility.

## **5\. Recommended Tech Stack**

### **5.1 Public Website Frontend**

Use:

Next.js  
React  
TypeScript  
Tailwind CSS  
Reusable component system  
Dark mode support  
SEO metadata support  
Static and dynamic routing  
API-driven frontend architecture

The website frontend should be treated as a standalone web frontend, not as WordPress pages.

### **5.2 Styling and UI System**

Use:

Tailwind CSS  
Reusable components  
Design tokens  
Consistent spacing system  
Reusable buttons  
Reusable cards  
Reusable form components  
Reusable result components  
Reusable membership cards  
Reusable tarot card components  
Light/dark theme variables

The design system should allow Shuyi to maintain a consistent brand across homepage, tarot, 测算, membership, dashboard, and admin-related pages.

### **5.3 Backend**

Continue using the existing PHP backend for the current phase.

The PHP backend should provide APIs for:

Tarot lite result generation  
Simple 测算 result generation  
User login or session identification  
Partial 测算记录  
Membership status  
Membership entitlement  
Payment or package confirmation  
User profile  
App deep link generation  
Result saving  
Input validation  
Security checks  
Admin dashboard operations

The frontend should not directly access the database.

### **5.4 Database**

Use the existing database layer managed by the backend.

The website frontend should not directly query the database.

All database-related actions should go through backend APIs.

### **5.5 Drag-and-Drop Content Management**

The website should support drag-and-drop or visual content editing for selected marketing and content areas.

Recommended options:

Builder.io  
Plasmic  
Directus  
Strapi with structured content blocks  
Custom block-based admin editor

For Shuyi, the recommended practical option is:

Next.js frontend \+ Builder.io or Plasmic for selected visual editing sections \+ PHP backend APIs for product logic.

If cost control and full ownership are more important, use a custom block-based admin editor instead of a third-party visual builder.

### **5.6 Admin Dashboard**

The platform should include a separate admin dashboard / back office.

Recommended options:

PHP-based admin dashboard if the backend developer is stronger in PHP  
React Admin / Refine / Ant Design Pro if the developer is stronger in React  
Directus if a ready-made admin and content management system is preferred  
Custom Next.js admin if full control is required

Recommended practical approach:

Use existing PHP backend as the source of truth, expose secure admin APIs, and build either a PHP-based admin panel or React-based admin dashboard.

### **5.7 Hosting**

Recommended hosting:

Frontend: Vercel or similar frontend hosting  
Backend: Existing PHP server or existing backend infrastructure  
Database: Existing MySQL or current production database  
Static assets: CDN or cloud object storage if required

### **5.8 Analytics**

Use:

GA4  
Meta Pixel if ads are used  
TikTok Pixel if ads are used  
Backend event tracking for important product events  
Conversion tracking for app download and open-app actions

## **6\. Product Positioning**

The website should be positioned as:

A light preview of Shuyi  
A trust-building brand website  
An SEO acquisition channel  
A place for users to try simple 测算  
A place for users to try tarot lite  
A place for users to understand membership benefits  
A limited place to view summary-level records  
A conversion funnel into the Shuyi App

The website should not provide the full app experience.

The Shuyi App should remain the place for:

Full reports  
Detailed tarot readings  
Deep personalized interpretation  
Daily engagement  
Energy points  
Membership benefits  
Full saved history  
Advanced analysis  
Push reminders  
Long-term retention  
Full monetization experience

## **7\. User Types**

### **7.1 New Visitor**

A new visitor may arrive from search, social media, ads, or shared links.

They should quickly understand what Shuyi does, try a simple calculation or tarot preview, and be guided toward the app.

### **7.2 Returning Website User**

A returning website user may come back to check a previous light result, try another simple calculation, or revisit membership information.

### **7.3 Existing App User**

An existing app user may visit the website to check content, open a shared link, view partial records, or access membership information.

The website should not confuse them or duplicate the full app experience.

### **7.4 Admin / Content Editor**

A non-technical admin should be able to update selected marketing content, banners, FAQ, SEO content, and landing page sections through drag-and-drop or visual editing.

They should not need to touch code for routine marketing updates.

### **7.5 Operations Admin**

An operations admin should be able to manage users, membership, records, packages, support lookup, and basic platform settings through a secure admin dashboard.

## **8\. Core Website Pages**

### **8.1 Homepage**

The homepage should explain what Shuyi does and guide users toward either trying a light calculation, trying tarot lite, or downloading/opening the app.

Homepage sections should include:

Hero section  
Brand introduction  
Core value proposition  
Popular 测算 entry points  
Tarot lite entry point  
Membership benefit preview  
Sample result preview  
Why use Shuyi  
App benefits  
Trust section  
FAQ preview  
App download CTA  
Footer

### **8.2 测算 Landing Page**

This page should list all available website-level calculations.

Each calculation card should include:

Name  
Short description  
Estimated time  
Preview-only label  
CTA to start  
CTA to unlock full report in app

### **8.3 Tarot Lite Page**

The Tarot Lite website page should be developed based on the existing Flutter tarot app flow and design reference.

The developer should review the Flutter tarot code and rebuild the website version in Next.js / React.

The website tarot version should include:

Question input  
Topic selection if applicable  
Card draw animation  
Limited number of cards  
Simplified interpretation  
Preview-only result  
CTA to continue in Shuyi App  
Optional saved preview record

The website tarot should not expose the full tarot app experience unless approved.

### **8.4 Simple Calculation Result Page**

The result page should show:

Result summary  
Basic explanation  
Limited recommendation  
Preview-only disclaimer  
App CTA  
Save preview option if supported  
Share option if supported

The page should clearly state that the website result is a simplified preview.

Chinese copy:

“此结果为简版预览。如需查看完整个人化解读，请前往数易 App。”

English copy:

“This is a simplified preview. For a complete personalized interpretation, please continue in the Shuyi App.”

### **8.5 测算记录 Page**

The website may show limited calculation records.

The page should include:

Recent website records  
Calculation type  
Date created  
Short result summary  
Preview-only label  
CTA to open full record in app

The website should not expose full app-level records unless backend rules allow it.

### **8.6 Membership Page**

Create a clear membership page for website users.

The page should include:

Free preview benefits  
Elite membership benefits  
VIP membership benefits  
One-off package explanation if applicable  
App-only benefits  
Website-accessible benefits  
CTA to upgrade  
CTA to open app  
FAQ about membership

Membership logic should come from the backend API.

The website should not hardcode membership status or entitlement rules.

### **8.7 User Profile / Lightweight User Dashboard**

The website can include a lightweight user dashboard.

The dashboard should show:

User basic profile  
Membership status  
Membership expiry date  
Remaining credits or energy points if applicable  
Recent preview records  
App download/open-app CTA  
Upgrade CTA

The dashboard should remain limited and should not replace the app dashboard.

### **8.8 About / Brand Page**

This page should build trust and explain Shuyi’s philosophy.

It may include:

Brand story  
Product mission  
Explanation of 数易  
Explanation of tarot guidance  
Explanation of spiritual/personal growth positioning  
App CTA

### **8.9 FAQ / SEO Pages**

Create SEO-friendly pages for:

What is Shuyi  
What is 数易  
Tarot reading preview  
Free 测算  
Membership FAQ  
App vs website difference  
Privacy and data usage  
Terms and disclaimers

## **9\. Drag-and-Drop Content Management Requirement**

The Shuyi website should support drag-and-drop or visual content editing for selected non-sensitive website sections.

The goal is to allow non-technical admins to update marketing and content areas without depending on developers for every small change.

Drag-and-drop editing should be supported for:

Homepage banners  
Hero section text and images  
CTA sections  
Feature blocks  
FAQ sections  
SEO content sections  
About/brand content  
App download banners  
Promotional banners  
Membership marketing copy  
Basic landing page sections

However, drag-and-drop editing should not control core product logic.

The following should remain controlled by frontend code and backend APIs:

Tarot calculation logic  
Tarot result generation  
数易 calculation logic  
Membership entitlement rules  
Payment logic  
User records  
Login/authentication  
API response handling  
Security-sensitive pages  
Database-related operations

Important principle:

Marketing content can be drag-and-drop. Product logic should not be drag-and-drop.

This keeps the website easy to update while preserving security, stability, and maintainability.

## **10\. Admin Dashboard / Back Office Requirement**

The Shuyi platform should include an admin dashboard for internal team operations.

The admin dashboard should be separate from the public website and should require secure admin login.

The admin dashboard should allow authorized admins to manage users, membership, records, content, tarot configuration, calculation configuration, and operational settings.

### **10.1 Core Admin Functions**

The admin dashboard should support:

User management  
Membership management  
Payment/package management  
测算记录 management  
Tarot configuration management  
Calculation type management  
Content/banner management  
FAQ/SEO content management  
App download link management  
Analytics overview  
Support/customer lookup  
Admin role management  
Audit log

### **10.2 User Management**

Admins should be able to:

Search users  
View user profile  
View registration source  
View membership tier  
View membership expiry date  
View user status  
View recent activity  
View user 测算记录 summary  
Suspend or reactivate user if needed  
Update user remarks or internal notes

Admins should not directly edit sensitive user data unless permission is granted.

### **10.3 Membership Management**

Admins should be able to:

View user membership tier  
View package purchase history  
View expiry date  
Manually adjust membership if required  
Grant complimentary membership  
Cancel or revoke membership access  
View Elite/VIP entitlement rules  
Manage one-off packages  
Manage app-only benefits vs website-accessible benefits

Membership entitlement logic should still be controlled by backend rules, not manually hardcoded in frontend.

### **10.4 Tarot / 测算 Management**

Admins should be able to:

Manage available website 测算 types  
Enable or disable calculation types  
Manage tarot lite availability  
Configure preview limits  
Configure result display rules  
Configure app CTA wording  
View website-generated preview records

The admin dashboard should not expose or weaken core calculation logic.

### **10.5 Content Management**

Admins should be able to edit:

Homepage banners  
Hero text  
CTA wording  
Feature sections  
FAQ content  
SEO title and description  
Membership marketing copy  
Promotional banners  
App download links  
About page content

If drag-and-drop editing is implemented, it should only apply to marketing and content sections, not product logic.

### **10.6 Role-Based Access Control**

The admin dashboard should support different admin roles, such as:

Super Admin  
Operations Admin  
Content Editor  
Support Admin  
Marketing Admin  
Finance Admin

Each role should only access the functions needed for their work.

### **10.7 Admin Security Requirements**

The admin dashboard must include:

Secure admin login  
Role-based access control  
Audit log for important actions  
No direct frontend database access  
Backend validation for all admin actions  
Protected membership modification  
Protected user suspension/reactivation  
API authentication  
Rate limiting where appropriate

## **11\. Tarot Website Development Requirement**

The existing Flutter tarot code should be used as reference for:

User flow  
Card layout  
Animation style  
Visual direction  
Card selection behavior  
Result structure  
App-level full experience boundary

However, the website implementation should be rebuilt in React / Next.js.

Do not simply embed Flutter Web unless approved.

The developer should identify:

Which Flutter tarot screens need a website equivalent  
Which logic should move to backend API  
Which animations should be simplified for web performance  
Which results are preview-only  
Which features should remain app-only

## **12\. Membership Optimization**

The website should support membership conversion without cannibalizing the app.

Recommended membership strategy:

Free website users can try limited results  
Logged-in users can view partial records  
Elite/VIP users can see their membership status  
Full benefits should remain mainly app-based  
Website should explain membership clearly  
Website should push users to app for deeper value

Membership page should avoid confusion between:

Free preview  
Paid report  
Elite membership  
VIP membership  
One-off package  
App-only entitlement  
Website-accessible entitlement

Backend should provide a membership entitlement API.

Example API:

GET /api/user/membership-status

Response should include:

User ID  
Membership tier  
Expiry date  
Available benefits  
Website-accessible benefits  
App-only benefits  
Upgrade CTA  
Deep link to app membership page

## **13\. API Requirements**

The website should call backend APIs for all product logic.

Required APIs may include:

Submit simple calculation  
Submit tarot lite request  
Fetch result summary  
Fetch partial calculation history  
Fetch membership status  
Fetch user profile  
Generate app deep link  
Save website preview record  
Validate input  
Track conversion event  
Fetch available calculation types  
Fetch membership product list  
Fetch admin user list  
Update admin membership action  
Fetch admin dashboard analytics  
Manage content blocks  
Manage banners  
Manage FAQ content

No sensitive business logic should live only in the frontend.

No frontend page should directly query the production database.

## **14\. Design Requirements**

The website should feel like an upgraded version of the Shuyi brand.

The design should be:

Mystical  
Premium  
Clean  
Mobile-first  
Trustworthy  
Smooth  
Modern  
Consistent with the Shuyi App

The developer should use the current website and Flutter app as visual references.

The design should include:

Light mode  
Dark mode  
Responsive layout  
Reusable cards  
Reusable buttons  
Tarot card components  
Calculation form components  
Result summary components  
Membership cards  
Dashboard cards  
Admin dashboard tables  
Admin dashboard forms  
Loading state  
Error state  
Empty state  
App CTA banner

Dark mode should be intentional, not a simple color inversion.

Suggested dark mode direction:

Deep navy / dark purple background  
Soft card surface  
Near-white primary text  
Soft gray secondary text  
Subtle gold or purple accent  
Gentle glow effect only where appropriate

## **15\. SEO Requirements**

The website must support:

Clean URLs  
Page title  
Meta description  
H1/H2 structure  
Open Graph image  
Schema markup where appropriate  
Fast page loading  
Image alt text  
Sitemap  
Robots.txt  
Canonical URL  
Mobile performance optimization

SEO landing pages should be created around high-intent keywords such as:

数易测算  
免费测算  
塔罗占卜  
塔罗牌测试  
姓名测算  
生日测算  
个人运势  
数易 App

## **16\. Analytics Requirements**

Track the following events:

Homepage visit  
Calculation page visit  
Calculation started  
Calculation submitted  
Result viewed  
Tarot question entered  
Tarot card drawn  
Tarot result viewed  
Membership page viewed  
Upgrade CTA clicked  
App download clicked  
Open app clicked  
Login clicked  
Record viewed  
API error occurred  
Dark mode toggled  
Admin login  
Admin membership update  
Admin content update

Analytics should help answer:

Which pages convert users to app downloads  
Which calculation types attract the most users  
Which tarot flow has the best completion rate  
Whether website users later become app users  
Whether membership page improves upgrade conversion  
Which content sections need improvement

## **17\. Performance Requirements**

The website should be optimized for mobile users.

Requirements:

Fast first load  
Lazy-load heavy images  
Avoid unnecessary JavaScript  
Use optimized images  
Use CDN caching  
Avoid heavy animation on low-end devices  
Optimize tarot animation for mobile browser  
Use loading skeletons  
Avoid blocking API calls where possible  
Keep marketing pages lightweight  
Keep admin dashboard separate from public website bundle where possible

## **18\. Security Requirements**

The website should:

Use HTTPS  
Never expose secret keys  
Never expose full database data  
Never directly query database from frontend  
Validate all user inputs through backend  
Rate-limit calculation APIs  
Protect membership APIs  
Protect user record APIs  
Use secure authentication/session handling  
Avoid storing sensitive personal data in local storage  
Protect admin routes  
Use role-based access control  
Keep audit logs for sensitive admin actions

## **19\. Migration Plan**

Phase 1: Audit current WordPress / Elementor website and custom code  
Phase 2: Confirm new Next.js information architecture  
Phase 3: Define required APIs from PHP backend  
Phase 4: Confirm drag-and-drop CMS or visual editor approach  
Phase 5: Confirm admin dashboard approach  
Phase 6: Build global design system and dark mode  
Phase 7: Build homepage and SEO pages  
Phase 8: Build 测算 landing page  
Phase 9: Build tarot lite web flow based on Flutter app reference  
Phase 10: Build result page  
Phase 11: Build membership page  
Phase 12: Build lightweight profile/dashboard  
Phase 13: Build partial 测算记录 page  
Phase 14: Build admin dashboard core modules  
Phase 15: Add drag-and-drop content editing for selected sections  
Phase 16: Add analytics, SEO, and performance optimization  
Phase 17: Test mobile, tablet, desktop, Safari, Chrome, and Edge  
Phase 18: Deploy new website  
Phase 19: Redirect old WordPress URLs  
Phase 20: Decommission Elementor/WordPress dependency after verification

## **20\. Acceptance Criteria**

The project is complete when:

Website is no longer dependent on Elementor  
Website is no longer built as WordPress frontend pages  
Frontend is built using Next.js / React / TypeScript  
Existing PHP backend is used through APIs  
Website supports light mode and dark mode  
Website is mobile, tablet, and desktop responsive  
Homepage is completed  
测算 landing page is completed  
Tarot lite page is completed based on Flutter app reference  
Result preview page is completed  
Membership page is completed  
Lightweight user dashboard/profile page is completed if backend supports it  
Partial 测算记录 page is completed if backend supports it  
Admin dashboard is implemented for core operations  
Admin dashboard supports user management  
Admin dashboard supports membership management  
Admin dashboard supports content/banner/FAQ management  
Drag-and-drop editing is available for selected marketing/content sections  
Drag-and-drop editing does not control product logic  
App download/open-app CTAs are implemented  
SEO basics are implemented  
Analytics events are implemented  
No sensitive logic is placed directly in frontend  
No direct frontend database access exists  
Old WordPress/Elementor pages are audited and redirected  
Website remains intentionally limited compared with the mobile app

## **21\. Developer Deliverables**

The developer should provide:

Current website audit document  
Recommended implementation plan  
Finalized tech stack proposal  
API requirement list  
Updated website design or mockups  
Light mode and dark mode design direction  
Reusable component documentation  
Implemented responsive website pages  
Tarot lite web implementation  
Membership page implementation  
User dashboard implementation if supported  
Admin dashboard implementation  
Drag-and-drop content editing setup  
API integration documentation  
List of custom code added or modified  
Deployment notes  
Admin usage notes  
Testing checklist  
SEO checklist  
Analytics event list  
Security checklist

## **22\. Recommended Implementation Priority**

Recommended order:

Audit current website and custom code  
Confirm design direction  
Confirm backend API requirements  
Confirm drag-and-drop CMS/page builder approach  
Confirm admin dashboard approach  
Build design system  
Build homepage  
Build SEO/content pages  
Build 测算 landing page  
Build tarot lite page  
Build result preview page  
Build membership page  
Build lightweight user dashboard  
Build partial 测算记录 page  
Build admin dashboard core features  
Add drag-and-drop content editing  
Add analytics and SEO  
Test and deploy  
Redirect old pages  
Remove Elementor/WordPress dependency

## **23\. Important Product Principle**

The website should attract, educate, preview, and convert.

The app should retain, monetize, and deliver the full experience.

Therefore, the website should give enough value for trust and conversion, but not enough to replace the Shuyi App.

Marketing content can be flexible and drag-and-drop.

Product logic must remain secure, backend-controlled, and stable.

The public website, user dashboard, and admin dashboard should be clearly separated.

## **24\. Final Recommendation**

The recommended Shuyi stack is:

Public website: Next.js \+ React \+ TypeScript  
Styling: Tailwind CSS \+ reusable component system  
Drag-and-drop content: Builder.io, Plasmic, Directus, Strapi, or custom block editor  
User dashboard: Next.js \+ PHP backend API  
Admin dashboard: PHP admin panel or React Admin  
Backend: Existing PHP backend  
Database: Existing MySQL / current database  
Tarot web: Rebuild Flutter tarot flow in React / Next.js  
Membership: Backend-controlled entitlement APIs  
Hosting: Vercel frontend \+ existing backend server  
Analytics: GA4 \+ ad pixels \+ backend event tracking

This stack gives Shuyi better long-term control than Elementor and WordPress, while still keeping the Flutter mobile app as the main product and monetization experience.

