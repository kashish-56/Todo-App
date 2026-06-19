# 🧠 TodoFlow

> A minimal, fast, and intuitive task management app designed to help you stay productive every day.

🚀 **Live App:** [https://kashish-56.github.io/Todo-App/](https://kashish-56.github.io/Todo-App/)

---

## 📱 What is TodoFlow?

**TodoFlow** is a lightweight productivity app that helps you manage daily tasks with ease.  
Add tasks, edit them instantly, mark them complete, and stay organized — all in a clean, distraction-free interface.

Think of it as your **personal task command center**.

---

## ✨ Key Features

* ✔️ **Create tasks instantly:** No loading screens or delays.
* ✔️ **Edit tasks in real-time:** Fix typos or update task names on the fly.
* ✔️ **Delete tasks with one click:** Keep your list clean and relevant.
* ✔️ **Mark tasks as completed:** Enjoy the satisfaction of crossing things off.
* ✔️ **Persistent storage:** Uses the browser's Local Storage so you never lose data.
* ✔️ **Fully responsive UI:** Looks great on both mobile devices and desktop screens.
* ✔️ **Zero backend:** Runs entirely in your browser for maximum privacy and speed.

---

## ⚡ How It Works

### 🧩 Add Task Flow

1. User enters a task into the input field.
2. Clicks the **"Add Task"** button.
3. The task appears in the list instantly! ✨

### 🗂️ Task Lifecycle

`CREATE` ➜ `DISPLAY` ➜ `MANAGE` ➜ `STORE`

### 🧑‍💻 Task Actions

Each task card includes three distinct actions:
* ✔️ **Complete:** Toggles the task's visual status.
* ✏️ **Edit:** Opens the task text for quick modification.
* 🗑️ **Delete:** Removes the task completely.

```text
TASK CARD
┌──────────────────────────┐
│ Task Name       ✔️ ✏️ 🗑️ │
└──────────────────────────┘
```
### 💾 Smart Storage System

1. **User Action:** You Add, Edit, or Delete a task.
2. **Auto-Update:** The application instantly saves the new state to your browser's Local Storage.
3. **Data Persistence:** Your task list remains perfectly intact even after you close the tab or refresh the page! 🔄

---

## 🛠️ Built With

* **HTML5:** For semantic structure.
* **CSS3:** For styling and responsive design.
* **JavaScript (Vanilla JS):** For DOM manipulation and logic.
* **Local Storage API:** For local data persistence.

---

## 🎯 Why TodoFlow?

* ⚡ **Fast & lightweight:** No heavy frameworks to slow it down.
* 🎯 **No login required:** Start organizing immediately.
* 🧠 **Simple UX:** Focused entirely on productivity, free of distractions.
* 📱 **Works on all devices:** Code once, run everywhere.
* 🔒 **100% client-side:** Your data never leaves your browser.

---

## 📸 Preview

👉 **Live Demo:** [https://kashish-56.github.io/Todo-App/](https://kashish-56.github.io/Todo-App/)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository:
   ```bash
   git clone [https://github.com/kashish-56/Todo-App.git](https://github.com/kashish-56/Todo-App.git)
   ```
2. Navigate to the project directory:
   ```bash
   cd Todo-App
   ```
3. Open the file in your preferred web browser.
  ```bash
    index.html
   ```
---

## 📚 Under the Hood: Core Web Concepts

Building a fast, interactive web application requires a strong understanding of how the browser engine processes code and handles interactions. Below are the core concepts that power web applications like TodoFlow.

### 🏗️ The Critical Rendering Path
How the browser converts raw code into a functional visual interface:

1. **Parsing:** The browser reads the raw bytes of HTML, CSS, or JavaScript and translates them into a format the browser engine understands. It pauses HTML parsing if it encounters synchronous scripts.
2. **Tokenization:** The raw string of HTML characters is converted into distinct tokens (e.g., `<html>`, `<body>`) as defined by the W3C standard.
3. **DOM Tree (Document Object Model):** The tokens are linked together into a tree data structure representing the document's hierarchy.
4. **CSSOM Tree (CSS Object Model):** The browser parses CSS and builds a secondary tree that maps out how each DOM node should be styled.
5. **Render Tree:** The DOM and CSSOM trees are combined. The Render Tree contains only the nodes required to render the page visually (e.g., elements with `display: none` are excluded).

### ⚡ JavaScript Event Mechanisms
How interactions (like clicking "Delete Task") are routed through the DOM:

1. **Event Capturing (Trickling):** The event starts at the highest level (`Window`, `Document`) and propagates downwards through the ancestors until it reaches the exact target element.
2. **Event Bubbling:** Once the event reaches the target element, it "bubbles" back upwards through its ancestors until it reaches the root. 
3. **Event Delegation:** A crucial performance optimization. Instead of attaching a new event listener to every single task `<li>` (which consumes memory), a single listener is attached to the parent `<ul>`. By utilizing Event Bubbling, the parent listener catches the click, checks the `event.target`, and processes the edit or delete action seamlessly for all current and future tasks.

---

## 🔮 Roadmap

- [ ] 🌙 Dark mode support
- [ ] 🔍 Task search functionality
- [ ] 📅 Due dates & reminders
- [ ] 🗂️ Task filters (All / Active / Completed)
- [ ] 🎯 Drag & drop task reordering

---

## 🤝 Contributing

Contributions are what make the developer community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👩‍💻 Author

**Kashish Kumari**

* **GitHub:** [https://github.com/kashish-56](https://github.com/kashish-56)
* **Live Project:** [https://kashish-56.github.io/Todo-App/](https://kashish-56.github.io/Todo-App/)

---

## ⭐ Support

* ⭐ **Star** the repository if you like this project
* 🍴 **Fork** it and improve it
* 📢 **Share** it with others

*Built with simplicity. Designed for productivity. ⚡*

   
