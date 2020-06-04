import Api from './api';

class App {
    constructor() {
        this.formEl = document.querySelector('#repo-form');
        this.inputEl = document.querySelector('#repository');
        this.listEl = document.querySelector('#repo-list');

        this.repositories = [];
        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => {
            this.addRepository(event);
        };
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando ...'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const inputElVal = this.inputEl.value;
        if (inputElVal.length === 0) {
            return;
        }

        this.setLoading();
        try {
            const response = await Api.get(`/repos/${inputElVal}`);
            const { name, description, html_url, owner: { avatar_url } } = response.data;
            
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });
            
            this.inputEl.value = '';
            this.render();
        } catch (erro) {
            alert('O repositório não existe.');
        }
        this.setLoading(false);
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach((repo, ind) => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let listItemElnk = document.createElement('a');
            listItemElnk.appendChild(document.createTextNode('Acessar'));
            listItemElnk.setAttribute('href', repo.html_url);
            listItemElnk.setAttribute('target', '_blank');

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(listItemElnk);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();