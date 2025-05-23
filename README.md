# TimeTracker-TableView-ChromeExt
This Chrome extension tracks the time users spend on different websites and displays it in a simple table format. It automatically records active website domains and calculates the time spent on each. The data is shown in a scrollable dashboard, helping users understand their online activity and manage their time more effectively.

The Website Time Tracker is a sophisticated Chrome browser extension designed to empower users by providing them with detailed insights into their web browsing habits. In today’s digital world, where much of our daily activity takes place online, it has become increasingly important to understand and manage how we spend our time on various websites. This extension addresses that need by automatically tracking the duration of user engagement with different websites, thereby enabling individuals to better monitor and control their online productivity and digital wellness.

Overview and Purpose
The primary purpose of this Chrome extension is to help users keep track of the amount of time they actively spend on each website during their browsing sessions. It operates unobtrusively in the background, capturing relevant browser activity without requiring any manual input from the user. By logging domain-specific time data and presenting it through an easy-to-read popup interface, the extension provides actionable information that users can use to reflect on and potentially modify their web usage habits.

Such time-tracking can be invaluable for professionals managing work-related web tasks, students balancing research and study, or anyone interested in understanding how much time is devoted to entertainment, social media, news, or other online activities. The extension’s design prioritizes simplicity, accuracy, and privacy by ensuring all tracking is done locally within the browser environment, without transmitting data externally.

Key Features
Automatic Time Tracking
At the heart of this extension lies the ability to automatically detect when the user switches between browser tabs or when the entire browser window gains or loses focus. These events are crucial indicators of when the user’s attention shifts between websites or to and from other applications on their computer.

Using Chrome’s background scripting capabilities, the extension listens to specific browser events such as onActivated for tab switches and onFocusChanged for window focus changes. This event-driven approach ensures that timing data is accurate and dynamically updated in real time, without draining system resources or requiring constant polling.

Per-Site Time Calculation
Once the extension detects a tab activation or window focus event, it records the timestamp of this occurrence and identifies the domain name of the currently active tab. When the user navigates away from that tab or the window loses focus, the extension calculates the duration spent on the previously active tab by subtracting the start time from the current time.

This calculated time increment is then aggregated with any previously recorded time for that domain, allowing for an ongoing tally of the total duration spent on each website throughout a browsing session or over multiple sessions. This fine-grained time measurement ensures that users receive an accurate breakdown of how their browsing time is distributed across different websites.

Local Data Storage
To respect user privacy and ensure seamless performance, all time tracking data is stored locally in the browser using Chrome’s chrome.storage.local API. This local storage mechanism is secure and persistent, meaning that users can close and reopen their browser without losing their accumulated time data.

By avoiding external data transmission, the extension protects user information from third-party access or online vulnerabilities. The stored data is maintained in a structured JavaScript object where domain names serve as keys and total time durations are stored as values. This design facilitates efficient data retrieval and update operations within the extension.

Interactive and Informative Dashboard
The extension’s user interface is accessible through the popup window that appears when the user clicks on the extension icon in the Chrome toolbar. This popup contains a dynamically generated table that lists all visited domains along with the corresponding total time spent on each, measured in seconds.

The table format allows users to quickly scan and identify websites where they spend the most or least time. In future iterations, this dashboard may be enhanced with graphical visualizations such as pie charts or bar graphs to offer a more intuitive and engaging representation of browsing patterns.

Clean, Modular Code Architecture
From a development perspective, the project follows best practices in organizing code into modular components. This modularity enhances maintainability, scalability, and ease of debugging.

background.js: This script handles all background event listeners and timing logic. It listens to tab activations and window focus changes, calculates time durations, and updates the time data object accordingly.

chart.js: Though currently optional and reserved for future enhancements, this script is intended for data visualization. It can render pie charts or bar charts to graphically represent time spent on websites, improving user understanding.

popup.js: Responsible for interacting with Chrome’s storage API to fetch the stored time data and dynamically update the popup’s table content.

popup.html: Contains the markup for the popup interface, including the structure of the table and any necessary UI elements.

styles.css: Defines the visual styling for the popup UI, ensuring the layout is clean, readable, and responsive to different screen sizes.

manifest.json: This crucial file declares the extension’s metadata, permissions (such as access to tabs and storage), background scripts, and other necessary configuration parameters required by Chrome to run the extension.

Detailed Working Mechanism
Event Detection: When the user activates a new browser tab or when the browser window gains or loses focus, the extension captures this event via listeners in the background script.

Timestamp Recording: The extension logs the precise timestamp at the moment of activation or focus change. It also extracts the domain of the active tab using Chrome’s tabs API.

Duration Calculation: When the user switches away from the tab or the window loses focus, the extension calculates the time spent on the previously active tab by subtracting the recorded start time from the current timestamp.

Data Aggregation: The calculated time is added to the cumulative total for that specific domain in the extension’s internal data structure.

Data Persistence: This updated time data is saved to Chrome’s local storage using asynchronous APIs, ensuring it remains available across sessions.

User Interface Update: Whenever the user opens the popup window, the extension retrieves the stored time data, generates an HTML table showing the domains and their corresponding total times, and displays it in the popup.

Use Cases and Benefits
Personal Productivity: Users can identify websites that consume significant portions of their browsing time, helping them minimize distractions.

Time Management: By tracking productive vs. non-productive web usage, users can set goals and monitor improvements in digital habits.

Parental Monitoring: Parents can use the extension to understand how children spend their online time.

Research and Work: Professionals and students can analyze the time dedicated to research or work-related sites.

Privacy and Security Considerations
Since all tracking and storage occur locally within the browser, users can be assured that their browsing data is not shared with external servers or third parties. This focus on privacy makes the extension trustworthy and compliant with common data protection expectations.

![Screenshot 2025-05-23 074454](https://github.com/user-attachments/assets/4fa1a590-7305-4ce5-8c32-07d562f51297)
