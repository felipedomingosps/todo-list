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

    return {newProject, addProject, addTodoToProject};
})();