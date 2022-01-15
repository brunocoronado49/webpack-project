import { showAlert } from './messages.js';
import './styles.scss';
import $ from 'jquery';

document.getElementById('btn-alert')
    .addEventListener('click', showAlert);

$('#btn-jq').click(() => alert('Hello from JQuery'))
