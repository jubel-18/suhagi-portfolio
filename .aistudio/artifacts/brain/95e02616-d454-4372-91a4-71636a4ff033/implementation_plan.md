# Blogger (Blogspot) Setup & Theme Export Plan for Suhagi Akter Portfolio

Create a comprehensive setup guide and single-file Blogger-compatible theme XML/HTML package for Suhagi Akter's Healthcare Assistant & Midwife portfolio, enabling one-click deployment onto any Google Blogspot site.

## User Review & Critical Decisions

> [!IMPORTANT]
> The user confirmed via interactive choice to use the **Single-file custom theme code (Blogger Theme Edit HTML)** method. This method allows pasting a standalone XML/HTML document directly into the Blogger Theme Editor (`Edit HTML`) without requiring complex template surgery or third-party hosting.

- **Confirmed Method**: Single-file custom Blogger Theme code (`Edit HTML` approach).
- **Design Alignment**: Preserves the exact clean sky-blue and white healthcare aesthetic matching the user's reference mockup (Hero, About Me journey, Experience, Education & Training, Skills, Reference, and Contact).
- **Data Integrity**: Uses 100% authentic CV details for Suhagi Akter (Rotherham, Hands On Rother LTD, BRAC University Midwifery, Clean DBS, Tier-2 Visa).

---

### 1. Overview & Core Concept

- **What It Does**: Provides step-by-step instructions and a fully packaged, self-contained single-file Blogger XML/HTML document that completely replaces default Blogspot blog templates with Suhagi Akter's professional portfolio.
- **Target Audience**: Suhagi Akter / Care recruiters / UK healthcare employers accessing her personal portfolio hosted on a free, permanent `*.blogspot.com` domain or custom domain.
- **Key Value**: Zero monthly hosting fees, zero server maintenance, fast Google CDN delivery, and full mobile responsiveness.

---

### 2. User Experience & Visual Design

- **Visual Theme & Color Palette**:
  - Soft light sky-blue background container (`#e0f2fe` / `#bae6fd`).
  - Centered rounded white card container (`bg-white rounded-3xl sm:rounded-[36px] shadow-xl`).
  - Primary Action Accent: Vibrant medical blue (`#0284c7` / `#0369a1`).
  - Soft Light Blue Feature Cards: (`#f0f9ff` border `#bae6fd`).
  - Clean display font: Google Fonts `Plus Jakarta Sans` & `Hind Siliguri`.
- **Top Bar Contract**:
  - Single brand wordmark (`Suhagi Akter`).
  - 5 clean navigation links (`About`, `Experience`, `Education`, `Skills`, `Contact`).
  - 1 primary action button (`Get In Touch`).
- **Layout Sections**:
  1. **Hero**: Headline ("I am Suhagi Akter"), profile role, circular photo backdrop, contact action buttons.
  2. **About Me**: 2-column layout (Healthcare Journey narrative on left, stack of light blue cards on right).
  3. **Work History**: Hands On Rother LTD (Cygnet Acer Clinic & Cherry Tree Care) and Bangladesh hospital midwifery experience.
  4. **Education & Certifications**: Formal degrees (BRAC University) and UK certifications (CSTF, Oliver McGowan, CPI, Dysphagia).
  5. **Skills**: Patient care, mental health, and professional communication pillars.
  6. **Contact & Reference**: Referee details (Sibbs Dube) and direct contact form.

---

### 3. Step-by-Step Blogger Setup Workflow

```
┌────────────────────────────────────────────────────────┐
│ 1. Create or Open Blog in Blogger (blogger.com)        │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│ 2. Backup Current Theme (Theme -> Backup)              │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│ 3. Open 'Edit HTML' in Blogger Theme Editor            │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│ 4. Select All (Ctrl+A), Delete, & Paste Generated Code │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│ 5. Save Theme (Floppy Disk Icon) & Disable Mobile View │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│ 6. Verify Live Site at https://yourname.blogspot.com    │
└────────────────────────────────────────────────────────┘
```

#### Step-by-Step Instructions:

1. **Log in to Blogger**:
   - Go to [https://www.blogger.com](https://www.blogger.com) and log into your Google Account.
   - Click your blog name or create a new blog (e.g., `suhagi-akter.blogspot.com`).

2. **Navigate to Theme Settings**:
   - On the left sidebar menu, click **Theme** (থিম).
   - Click the dropdown arrow next to the orange **Customize** button.
   - Click **Backup** (ব্যাকআপ) and download a copy of your existing theme just in case.

3. **Open Theme HTML Editor**:
   - In the same dropdown menu, select **Edit HTML** (এডিট এইচটিএমএল).
   - This opens the complete code editor for your Blogspot template.

4. **Paste the Custom Theme Code**:
   - Press `Ctrl + A` (Mac: `Cmd + A`) inside the code editor to highlight all existing default Blogger code.
   - Press `Delete` or `Backspace` to clear it completely.
   - Paste the single-file Blogger code generated for this portfolio.

5. **Disable Blogger Default Mobile Template**:
   - Click the **Save** (💾 ফ্লপি ডিস্ক আইকন) button in the top right of the editor.
   - Return to the **Theme** page.
   - Click the dropdown next to **Customize** -> click **Mobile settings**.
   - Choose **Desktop** (so Blogger doesn't force a tiny legacy mobile template, as the custom code is already 100% mobile responsive).
   - Click **Save**.

6. **View Live Blog**:
   - Click **View Blog** (ব্লগ দেখুন) at the bottom left.
   - Your complete, professional portfolio is now live on your Blogspot address!

---

### 4. Technical Architecture of the Blogger Template

- **Self-Contained Architecture**:
  - Embedded Tailwind CSS CDN script with custom color tokens.
  - Google Fonts CDN links for `Plus Jakarta Sans` and `Hind Siliguri`.
  - Font Awesome 6 icons CDN for medical, certificate, and contact icons.
  - Valid Blogger XML namespace tags (`xmlns:b='http://www.google.com/2005/gml/b'`, `<b:skin>`, and `<b:section>`) required to prevent Blogger parser syntax errors.
  - Image handling: Clean Base64 or HTTPS web asset references to ensure fast loading on Blogspot.
  - Responsive breakpoint handling (`sm:`, `md:`, `lg:`) pre-compiled for all screen sizes.
