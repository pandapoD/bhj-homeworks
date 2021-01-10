const input = document.getElementById('task__input');
const buttonAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

// input.addEventListener('change', (e) => {
// 	e.preventDefault();
// 	addTask();
// });
buttonAdd.addEventListener('click', addTask);
tasksList.addEventListener('click', closeTask);

function addTask(e) {
	e.preventDefault();
	msg = input.value;
	tasksList.insertAdjacentHTML(
		'afterbegin',
		template(msg),
	);
	input.value = '';
}

function template(msg) {
	return `
	<div class="task">
		<div class="task__title">${msg}</div>
		<a href="#" class="task__remove">&times;</a>
	</div>
	`;
}

function closeTask(e) {
	if (e.target.className != 'task__remove') return;
	e.target.closest('div').remove();
}

