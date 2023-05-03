const render = (() => {
    const body = document.querySelector('body');
    
    const addContentTag = () => {
        const content = document.createElement('div');
        content.setAttribute('id', 'content');

        body.innerHTML = '';
        body.appendChild(content);
    };

    const addPageInitialContent = () => {
        document.getElementById('content').innerHTML = `
        <header>
            <div class="container">
                <h1>Todo List</h1>
            </div>
        </header>
        <main>
            <div class="projects" id="projects-div">
                    
            </div>
        </main>`;
    };

    const addProject = (projectName) => {
        document.getElementById('projects-div').innerHTML += `
        <div class="project" data-project-name="${projectName}">
            <h2>${projectName}</h2>

            <div class="cards">
                        
            </div>
        </div>
        `;
    };

    const addCardButton = () => {
        //Opens a form inside a project where the user can create a card
        //It would be nice if the form was a pop up
    };

    return {addContentTag, addPageInitialContent, addProject, addCardButton};

})();

