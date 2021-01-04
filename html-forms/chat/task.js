const chat = document.querySelector('.chat-widget');
const redBadge = document.querySelector('.chat-widget__side-text');
const messageClient = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

redBadge.addEventListener('click', () => chat.classList.add('chat-widget_active'));

messageClient.addEventListener("change", getMessageClient);

function getMessageClient() {
	const msg = messageClient.value;
	messages.insertAdjacentHTML(
		'beforeend',
		getSampleMessage(msg, ' message_client'),
	);
	messageClient.value = "";
	getMessageBot();
}

function getMessageBot() {
	messages.insertAdjacentHTML(
		'beforeend',
		getSampleMessage(getAnswer()),
	);
}

function getSampleMessage(msg, type = '') {
	return `
	<div class="message${type}">
		<div class="message__time">${new Date().toTimeString().slice(0, 5)}</div>
		<div class="message__text">${msg}</div>
	</div>
	`;	
}

function getAnswer() {
    const answers = [
        'Я не могу перестать есть эти фрикадельки. А вы пробовали их?',
        'Здесь так жарко.',
        'Я чувствую себя немного ошеломленным потоком информации, который вы на меня выплёскиваете!',
        'Ну, по шкале от 1 до совершенно несъедобного, насколько тут плохое Шардоне?',
        'Признаюсь честно, единственный человек, с которым я тут знаком — это бармен, а с ним я уже поговорил.',
        'Я сейчас работаю над статьей о самых лучших и худших способах начать разговор.',
        'Просто поверить не могу во все эти сумасшедшие заголовки новостей сегодня. Ну и неделя!',
        'Я намерен жить вечно — пока всё идет нормально.',
        'Извините, что я говорю, когда вы перебиваете.',
        'У меня есть один недостаток: я не умею общаться с дураками.',
        'Вам пошли бы искорки из глаз.'
      ];
      index = Math.floor(Math.random() * answers.length);
    return answers[index];
  }

