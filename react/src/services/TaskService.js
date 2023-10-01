export default {
    getTasks: async (page, search, filter) => {
	return new Promise((accept, reject) => {
	    setTimeout(() => {
		if (page == 0) {
		    accept([{
			id: 0,
			titulo: 'Título de ejemplo',
			descripcion: 'Esta es una descripción de ejemplo.',
			fechaDeCreacion: '29-09-2023',
			estado: 'Jalisco',
			nombreDelCreador: 'Juan Pérez',
			likes: 12
		    }]);
		} else if (page == 1) {
		    accept([{
			id: 1,
			titulo: 'Título de ejemplo',
			descripcion: 'Esta es una descripción de ejemplo.',
			fechaDeCreacion: '29-09-2023',
			estado: 'Baja California',
			nombreDelCreador: 'Daniel Aguila',
			likes: 0
		    }]);
		} else {
		    accept([]);
		}
	    }, 2000);
	});
	//return fetch('/api').then((res) => res.json());
    },

    likeTask: async (task) => {
	return new Promise((accept, reject) => {
	    setTimeout(() => {
		accept();
	    }, 500);
	});
    },

    deleteTask: async (task) => {
	return new Promise((accept, reject) => {
	    setTimeout(() => {
		accept();
	    }, 500);
	});
    }
};
