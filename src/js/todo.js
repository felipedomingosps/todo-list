const todoCard = (title, description, dueDate, priority) => {
    let done = false;
    return {title, description, dueDate, priority, done};
};

const projects = (() => {
    let allProjects = {};

    const addNewProject = (name) => {
        allProjects[name] = {
            todoCards: []
        }      
    };

    const getProject = (name) => {
        return allProjects[name];
    }

    const addCardToProject = (todoCard, projectName) => {
        allProjects[projectName].todoCards.push(todoCard);
    }

    return {addNewProject, addCardToProject, getProject};
})();

/* Test */

const a = todoCard("A", 'a description', '10/10/2023', 1);
const b = todoCard("B", 'b description', '10/10/2023', 4);
const c = todoCard("C", 'c description', '10/10/2023', 2);

const cards = [a, b, c];

projects.addNewProject("First");

cards.forEach(card => {
    projects.addCardToProject(card, "First");
});

console.log(projects.getProject("First"));