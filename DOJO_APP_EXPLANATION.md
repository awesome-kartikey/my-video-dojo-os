# DOJO 2.0 — Complete Application Explanation

This document explains the **DOJO 2.0** application in simple terms to help you understand what you are recording, how the app flows, and the story it tells.

## 1. What is DOJO 2.0?
DOJO 2.0 is an "Industry 4.0" platform designed for manufacturing companies. Its main goals are to manage factory workers (manpower), track their skills, train them through games/simulations, and monitor quality issues. 

Instead of using spreadsheets or separate tools, DOJO 2.0 brings everything into one unified dashboard.

## 2. The Main Story (Why does this app exist?)
The app solves three big problems for manufacturing leaders:
1. **Workforce Visibility:** They don't know who is on the floor, who is absent, or if they have enough people for a shift.
2. **Skill Tracking:** They struggle to track what their workers are good at and how to train them better.
3. **Quality Control:** When defects happen, it's hard to track them and ensure corrective actions are taken.

Your screen recording will show how DOJO 2.0 solves these problems smoothly and efficiently.

---

## 3. Core Modules of the Application

Here are the main sections of the app that you will be recording, explained simply:

### A. The Command Center (Manpower Dashboard)
* **What it is:** The first thing you see after logging in. It's a high-level view of the factory floor's health.
* **Key Features to Record:** 
  * **KPI Cards (Top row):** Shows immediate stats like shift coverage (e.g., Do we have enough people for Shift A?), absenteeism, attrition (people quitting), and overtime.
  * **Charts & Trends:** Visual graphs showing trends over time (e.g., why are people leaving? which department has the most people?).
  * **Drill-Down:** Clicking on a chart expands it to full screen so you can see more details.

### B. Skill Matrix & Assessment
* **What it is:** A visual grid showing all employees and their skill levels in different areas.
* **Key Features to Record:**
  * **Color Coding:** Levels go from 1 (Beginner, Red) to 5 (Expert, Blue/Cyan). It makes it easy to spot who needs training.
  * **Updating Skills:** You can click on an employee's skill cell, slide their level up (e.g., from a 3 to a 4), and save it. The color updates instantly.

### C. Mini-DOJO (Gamified Training)
* **What it is:** Instead of boring training videos, employees play interactive games to learn factory skills.
* **Key Features to Record:**
  * **Game Library:** A page showing all available training games.
  * **Gameplay (e.g., 5S Sort):** You will record a user playing a game where they drag and drop factory tools into the correct bins before a timer runs out. 
  * **Automatic Updates:** When the game ends, the user gets a score, and their skill level on the "Skill Matrix" automatically increases.

### D. Quality Tracking (Defects & Rejections)
* **What it is:** Where supervisors log mistakes or broken parts.
* **Key Features to Record:**
  * **Customer Defects & Internal Rejections:** Tables listing all issues. You will record adding a new defect (filling out a form with customer name, defect type, severity) and saving it.

### E. Action Plans
* **What it is:** The "To-Do" list for fixing the quality issues mentioned above.
* **Key Features to Record:** You will create an action plan (e.g., "Fix surface scratches"), assign it to someone, and update its progress bar to show work is being done.

### F. Quick-Add Menu (FAB)
* **What it is:** A floating "+" button in the bottom right corner of the screen.
* **Why it matters:** Supervisors are busy. This button lets them instantly record attendance, overtime, or a new defect without having to navigate away from the page they are currently looking at.

### G. Management Review
* **What it is:** An executive summary for the big bosses.
* **Key Features to Record:** Shows overall health scores, compliance, and top-level trends. It has a button to instantly download a "Board Report" PDF.

---

## 4. Understanding the Data & Charts (What They Mean)

When recording, you will see a lot of data on the screens. Here is what each metric means and what happens when you interact with the app.

### A. Manpower Dashboard Data (Factory Floor Health)
This section tells a supervisor if they have enough people to run the factory today, and if people are trained and showing up.

* **Manpower Advance Planning & Daily Manpower Board:** Shows the scheduled working shifts and how many workers are assigned vs. required.
    * **The 3 Values in a cell:** Each block displays the live headcount (e.g., `3` Actual Present), the minimum requirement (`/ 17` Required), and the safety buffer (`+ 3 Buffer`). The "Optimal" headcount is Required + Buffer (e.g., 20).
    * **Color Coding:** 
        * 🔴 **Red (Shortfall):** `Actual < Required`. Critical labor shortage; you don't have enough people to run the shift.
        * 🟡 **Amber (Met Required, using Buffer):** `Actual` is between `Required` and `Optimal`. Operations are safe, but you are eating into your buffer.
        * 🟢 **Green (Optimal):** `Actual >= Optimal`. Ideal headcount achieved, and your buffer is completely intact.
* **Absenteeism Trend:** A line chart showing the percentage of people who didn't show up to work over the last few days. The "Target (8%)" is the goal: keep absenteeism below 8%.
* **Attrition Trend:** Shows how many people have quit or resigned ("Left This Mth"). High attrition means you are losing experienced workers.
* **Coverage (e.g., 119.8%):** A donut gauge showing the ratio of actually allocated employees to the required headcount across all shifts.
    * **How it is calculated:** `(Actual Employees Present / Required Headcount) * 100`. For example, `(502 / 419) * 100 = 119.8%`.
    * **Key Data Points:**
        * **502 (Actual):** The actual number of active employees currently present on the floor.
        * **419 Req:** The minimum required headcount needed to run operations.
        * **Variance / Ethics:** Underneath the percentage, you see the words "Variance" and "Ethics". This refers to the variance (difference) in your scheduling compliance. Having 119.8% coverage is standard to buffer against unexpected absences, but too much coverage increases labor costs.
* **Attendance:**
    * **502 Trained Req.:** Shows how many trained, qualified employees are present on the floor.
    * **Teal/Amber progress bar:** Represents the actual coverage percentage vs. the threshold.
    * **-83 Required to Cover:** The formula used here is `Required Headcount - Actual Headcount` (e.g., `419 - 502 = -83`). Because the number is negative (`-83`), it means you have a **surplus of 83 workers** on the floor today. If it were a positive number (like `20`), it would mean you are short-staffed by 20 people.
* **Utilization:** A measure of how much of your workforce's time is actually being spent on productive tasks versus lost time.
    * **How it is calculated:** `(Total Utilized Hours / Total Available Hours) * 100`.
    * **Key Concepts:**
        * **Total Available Hours:** The sum of all scheduled working hours for present workers. E.g., 10 present workers on an 8-hour shift = 80 available hours.
        * **Total Utilized Hours:** The hours actually spent on direct, productive floor operations.
        * **Loss Hours (Downtime):** Hours lost due to maintenance issues, machine failure, or material shortages. `Available Hours = Utilized Hours + Loss Hours`.
        * **Example:** If workers have 100 available hours but spend 20 hours waiting for parts (Loss Hours), they did 80 hours of utilized work. The utilization is `(80 / 100) * 100 = 80%`.
* **Overtime Today:** Hours of overtime being worked today. High overtime can lead to burnout.
* **Live Operational Alerts:** A real-time feed of tasks, audits, and action plans. It shows what is "Completed," what is "Overdue," and upcoming deadlines (like an Annual Safety Day Celebration).
* **Active Headcount:** The total number of people currently on the factory floor (e.g., 97), broken down by their department (Production, Inspection, Stores, etc.).
* **Attrition Reasons:** A pie chart explaining *why* people quit (Better Opportunity, Salary, Relocation).
* **Training Mod Avg Score:** A bar chart showing the average scores your workers are getting on the "Mini-DOJO" training games (like 5S Housekeeping, CNC Operation, etc.).
* **Daily Overtime Trend:** A chart tracking how many extra hours people are working over the last few days.
* **Training Modules By Category:** A breakdown showing where training efforts are focused (e.g., Compliance, DOJO, Operations).

### B. Executive Management Review (The "Big Picture")
This section is for the leadership (plant managers, executives) to see the overall health of the entire facility over a longer period (usually a year).

* **AI Executive Summary:** An automatically generated text summary that reads the charts and highlights the biggest issues (e.g., "Customer defect rate is exceeding the target").
* **Audit Readiness / Facility Compliance Score:** A single gauge (e.g., 89%) showing how ready the factory is if an external auditor were to walk in today.
    * **Formula:** It is calculated based on two key pillars of operations: `(Overall Action Plan Progress × 0.40) + (Latest Month's Training Adherence × 0.60)`.
* **Customer Defect Trend (YTD = Year to Date):** Tracks how many bad parts made it to the customer. A massive red flag for management if it's over the target.
    * **Dynamic Targets:** The YTD defect count is compared to an annual limit (e.g., `< 24`). If it exceeds the target, the UI dynamically turns red and calculates a multiplier (e.g., `▲ 49.38x`) to show exactly how far over the limit the factory is. If it's under control, it shows a green downward arrow (`▼`).
* **Customer Defect Breakdown & Internal Rejections (By Department):** Categorizes defects by severity and identifies which departments are generating the most internal rejections. 
    * **Data Consistency:** Both charts dynamically filter database records strictly for the *current reporting year (YTD)*, ensuring the visual breakdowns perfectly match the total YTD numbers displayed elsewhere on the page.
* **Internal Rejection Trend (PPM = Parts Per Million):** Tracks how many bad parts were caught *inside* the factory before they shipped. 
* **Training Plan vs Adherence:** Shows if the factory is completing the training they scheduled.
    * **How it works:** The system dynamically groups all training plans by month, sums up the planned vs. completed hours across all departments, and calculates an overall monthly adherence percentage. It then compares this actual adherence percentage (e.g., `95%`) against the factory's target compliance standard of `90%`.
* **Action Plan Progress Monitoring:** Shows the status of the "To-Do" lists created to fix problems. It breaks them down by category (Quality, Safety, Process).
    * **Total Counts & Icons:** Shows total action plans as `✓ 29` (Completed), `⌛ 0` (In Progress - actively being worked on, not overdue), and `⚠ 16` (Pending/Open - backlog tasks not started yet, or tasks that missed their target deadline).

---

## 5. What Updates Dynamically (Live)?

Because DOJO 2.0 is built as a unified platform, most data is dynamic and will update instantly when you use the Quick-Add Menu (FAB) or fill out forms during your screen recording. 

**Here is what you will see update live:**
* **Adding "Quick Attendance":** If you mark a worker as "Absent", the **Absenteeism Trend** chart, the **Coverage** gauge, and the **Today's Shifts** numbers will instantly recalculate and change.
* **Playing a "Mini-DOJO" Game:** When the game finishes and a score is submitted, the **Training Mod Avg Score** chart and the employee's color-coded **Skill Matrix** level will update immediately.
* **Adding a "Customer Defect":** If you log a new defect, the **Customer Defect Trend** and the **Customer Defect Breakdown** (Critical, High, etc.) will increase.
* **Updating an "Action Plan":** If you edit an Action Plan and change its progress slider from 50% to 75%, the **Action Plan Progress Monitoring** bars and the **Live Operational Alerts** feed will instantly reflect that new status.

**What might NOT look like it updates immediately:**
* **Long-term trends (like Attrition over 12 months):** If you log one person resigning today, the "12-month trend" chart will update its underlying data, but visually, the chart might not look vastly different because one person is a small drop in a 12-month bucket. 
* **AI Executive Summary:** Depending on the setup, this text might only regenerate once a day or when the page is refreshed, rather than changing every single time a button is clicked.

---

## 6. Tips for Your Screen Recording

To make the video look professional and match the scripts (`SHOOTING_SCRIPT.md` and `REMOTION_SCRIPT.md`), keep these rules in mind while recording:

1. **The "Hold & Breathe" Rule:** Before you click something, leave your mouse still for 2-3 seconds. After you click, leave it still for another 2-3 seconds. This gives the video editor time to cut and add voiceovers.
2. **Show Intent with the Cursor:** Move the mouse smoothly to the button you want to click. Don't jerk it around. The viewer's eye follows your cursor.
3. **Type Slowly:** When filling out forms (like searching for an employee named "Raj"), type one letter at a time so the viewer can see the auto-complete working.
4. **Don't Worry About Audio:** Do not record your voice while clicking. The voiceover will be added later based on the script. Just focus on smooth visuals.
5. **One Take Per Scene:** Treat every scene in the `SHOOTING_SCRIPT.md` as a separate, short video clip. If you mess up, just stop recording and do that short scene again. Name them exactly as requested (e.g., `scene-01-landing.mp4`).

## Summary of the Flow You Are Recording
You are telling the story of a supervisor who:
1. Logs in and checks the **Dashboard** for factory health.
2. Checks the **Skill Matrix** and updates an employee's skill.
3. Watches an employee complete a **Mini-DOJO** training game.
4. Logs a **Quality Defect** and creates an **Action Plan** to fix it.
5. Uses the **Quick-Add** button to quickly mark someone present.
6. Shows the **Management Dashboard** for the executives.
