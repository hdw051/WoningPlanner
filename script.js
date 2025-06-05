const strings = {
  nl: {
    edit: 'Bewerk Planning',
    save: 'Opslaan',
    newTask: 'Nieuwe taak toevoegen',
    newAction: 'Nieuwe actie toevoegen',
    progressDone: 'Project voltooid!',
    progressStart: (date) => `Het project start op ${date}.`,
    progressDays: (cur, total) => `Dag ${cur} van ${total} is voorbij.`,
    welcomeTitle: 'Welkom!',
    welcomeText: 'Selecteer een dag uit de tijdlijn hierboven om de details te bekijken.'
  }
};
let lang = 'nl';
const t = (key, ...args) => {
  const val = strings[lang][key];
  return typeof val === 'function' ? val(...args) : val;
};

let nextId = 1;
const newId = () => nextId++;
const makeItems = (arr) => arr.map(text => ({ id: newId(), text }));

const defaultWorkDays = [
  {
    day: 1,
    date: '2025-06-10',
    title: 'Voorbereiding & Asbest',
    tasks: makeItems([
      'Afdekken van looproutes en werkplekken',
      'Aftimmeren van schoorsteen en dakraam (zolder)',
      'Verwijderen aftimmering bij asbestbuizen (hele woning)'
    ]),
    residentActions: makeItems([
      'Zorg voor vrije toegang tot alle ruimtes',
      'Maak looproutes en werkruimtes vrij',
      'Zolder gedeeltelijk leegmaken (zoals besproken bij het huisbezoek)'
    ])
  },
  {
    day: 2,
    date: '2025-06-11',
    title: 'Asbest Verwijderen',
    tasks: makeItems(['Verwijderen van asbest (hele woning)']),
    residentActions: makeItems([
      'Toegang geven tot alle ruimtes',
      'Looproutes en werkplekken vrijhouden',
      'Zoldergedeelte leegmaken'
    ])
  },
  {
    day: 3,
    date: '2025-06-12',
    title: 'Voorbereiding WTW',
    tasks: makeItems([
      'Afkoppelen van installatie (zolder)',
      'Installatie reinigen',
      'Gaten boren voor WTW-installatie (hele woning)',
      'Aantekenen van posities voor WTW-onderdelen'
    ]),
    residentActions: makeItems([
      'Toegang geven tot alle ruimtes',
      'Zoldergedeelte leegmaken',
      'Radiatorkranen en bedieningsknoppen bereikbaar maken'
    ])
  },
  {
    day: 4,
    date: '2025-06-13',
    title: 'Elektrische Installaties',
    tasks: makeItems([
      'Nieuwe deurbel installeren (voorgevel)',
      'Vervangen van groepenkast (meterkast)',
      'Perilex-aansluiting aanleggen in keuken (indien nodig)'
    ]),
    residentActions: makeItems([
      'Toegang geven tot alle ruimtes',
      'Meterkast leegmaken',
      'Fornuis verplaatsen of keukenkastje leegmaken (bij perilex)',
      'Zoldergedeelte leeghouden'
    ])
  },
  {
    day: 5,
    date: '2025-06-16',
    title: 'Radiatoren Vervangen',
    tasks: makeItems([
      'Radiatoren vervangen in keuken en woonkamer',
      'Vervangen van radiatorkranen',
      'Spoelen/reinigen van radiatoren (binnenzijde)'
    ]),
    residentActions: makeItems([
      'Toegang geven tot alle ruimtes',
      'Radiatorkranen bereikbaar houden',
      'Zoldergedeelte leeghouden'
    ])
  },
  {
    day: 6,
    date: '2025-06-17',
    title: 'Installatie Warmtepomp',
    tasks: makeItems([
      'Installatie warmtepomp op zolder',
      'Installatie WTW-unit',
      'Aanleggen ventilatiekanalen',
      'Aansluiten afzuigkap'
    ]),
    residentActions: makeItems([
      'Toegang geven tot alle ruimtes',
      'Zoldergedeelte leegmaken'
    ])
  },
  {
    day: 7,
    date: '2025-06-18',
    title: 'Kozijnen en Deuren',
    tasks: makeItems([
      'Vervangen van kunststof kozijnen',
      'Vervangen voor- en achterdeur',
      'Plaatsen van vensterbanken',
      'Glas vervangen (1e verdieping)'
    ]),
    residentActions: makeItems([
      'Zorg dat ramen en vensterbanken leeg zijn',
      'Geef aan waar de nieuwe sleutels kunnen worden opgehaald',
      'Toegang geven tot alle ruimtes'
    ])
  },
  {
    day: 8,
    date: '2025-06-19',
    title: 'Aftimmering & Isolatie',
    tasks: makeItems([
      'Aftimmering om WTW-buizen (slaapkamer)',
      'Geïsoleerd vloerluik plaatsen',
      'Isolatie begane grondvloer (of op dag 9)'
    ]),
    residentActions: makeItems([
      'Toegang geven tot alle ruimtes',
      'Zoldergedeelte leeghouden'
    ])
  },
  {
    day: 9,
    date: '2025-06-20',
    title: 'Vloerisolatie & Afbouw',
    tasks: makeItems([
      'Isoleren van begane grondvloer (indien nog niet gebeurd)',
      'Voorzetwand en brandwerend plafond in berging/uitbouw (indien gekozen)'
    ]),
    residentActions: makeItems([
      'Berging/uitbouw leegmaken',
      'Toegang geven tot alle ruimtes'
    ])
  },
  {
    day: 10,
    date: '2025-06-23',
    title: 'Afbouw Berging',
    tasks: makeItems([
      'Plaatsen voorzetwand en brandwerend plafond in berging/uitbouw (indien gekozen)'
    ]),
    residentActions: makeItems([
      'Kruipluik bereikbaar houden',
      'Toegang geven tot alle ruimtes'
    ])
  },
  {
    day: 11,
    date: '2025-06-24',
    title: 'Schilderwerk',
    tasks: makeItems([
      'Schilderwerk aan aftimmeringen en plafond van uitbouw (hele woning)'
    ]),
    residentActions: makeItems([
      'Vensterbanken leegmaken',
      'Raambekleding verwijderen',
      'Kruipluik bereikbaar houden',
      'Toegang geven tot alle ruimtes'
    ])
  },
  {
    day: 12,
    date: '2025-06-25',
    title: 'Vervolg Schilderwerk',
    tasks: makeItems(['Vervolg schilderwerk aan aftimmeringen en plafond uitbouw']),
    residentActions: makeItems(['Toegang geven tot alle ruimtes'])
  },
  {
    day: 13,
    date: '2025-06-26',
    title: 'Eindschoonmaak',
    tasks: makeItems(['Eindschoonmaak (hele woning)']),
    residentActions: makeItems(['Toegang geven tot alle ruimtes'])
  },
  {
    day: 14,
    date: '2025-06-27',
    title: 'Oplevering',
    tasks: makeItems(['Vooroplevering en oplevering van uw woning']),
    residentActions: makeItems(['Toegang geven tot alle ruimtes'])
  }
];

let workDays = JSON.parse(localStorage.getItem('workDaysData'));
if (!workDays) {
  workDays = defaultWorkDays;
  localStorage.setItem('workDaysData', JSON.stringify(workDays));
}
let completedItems = JSON.parse(localStorage.getItem('completedItems')) || {};

function saveCompletionState() {
  localStorage.setItem('completedItems', JSON.stringify(completedItems));
}
function saveWorkDays() {
  localStorage.setItem('workDaysData', JSON.stringify(workDays));
}

document.addEventListener('DOMContentLoaded', () => {
  const timelineContainer = document.getElementById('timeline-container');
  const detailsContainer = document.getElementById('details-container');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  const editPlanningBtn = document.getElementById('edit-planning-btn');
  const resetBtn = document.getElementById('reset-btn');
  const exportBtn = document.getElementById('export-btn');

  let activeDay = null;
  let editingMode = false;

  editPlanningBtn.addEventListener('click', () => {
    editingMode = !editingMode;
    editPlanningBtn.textContent = editingMode ? t('save') : t('edit');
    if (!editingMode) {
      saveChanges();
      saveWorkDays();
    }
    renderDetails(activeDay);
    updateActiveCard();
  });

  resetBtn.addEventListener('click', () => {
    localStorage.removeItem('workDaysData');
    localStorage.removeItem('completedItems');
    location.reload();
  });

  exportBtn.addEventListener('click', () => {
    const data = {
      workDays,
      completedItems
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'planning-backup.json';
    a.click();
    URL.revokeObjectURL(url);
  });

  window.toggleCompletion = function (event, itemId) {
    completedItems[itemId] = event.target.checked;
    saveCompletionState();
    updateProgress();
    const listItem = event.target.closest('.task-item');
    if (listItem) {
      listItem.classList.toggle('completed', event.target.checked);
    }
  };

  function saveChanges() {
    if (!activeDay) return;
    const currentDayDataIndex = workDays.findIndex((d) => d.day === activeDay);
    if (currentDayDataIndex === -1) return;
    const currentDayElement = detailsContainer.querySelector('.detail-card-enter');
    if (!currentDayElement) return;

    const newTasks = [];
    currentDayElement.querySelectorAll('#tasks-list input[type="text"]').forEach((input) => {
      if (input.value.trim() !== '') {
        newTasks.push({ id: Number(input.dataset.id) || newId(), text: input.value.trim() });
      }
    });
    workDays[currentDayDataIndex].tasks = newTasks;

    const newResidentActions = [];
    currentDayElement.querySelectorAll('#resident-actions-list input[type="text"]').forEach((input) => {
      if (input.value.trim() !== '') {
        newResidentActions.push({ id: Number(input.dataset.id) || newId(), text: input.value.trim() });
      }
    });
    workDays[currentDayDataIndex].residentActions = newResidentActions;
  }

  function renderTimeline() {
    timelineContainer.innerHTML = '';
    workDays.forEach((day) => {
      const dayCard = document.createElement('div');
      dayCard.className =
        'day-card glass-card flex-shrink-0 w-32 h-32 p-3 border-2 border-stone-200 rounded-lg cursor-pointer hover:border-blue-400 hover:shadow-lg';
      dayCard.dataset.day = day.day;

      const date = new Date(day.date + 'T00:00:00');
      const dayOfWeek = date.toLocaleDateString('nl-NL', { weekday: 'short' });
      const dayOfMonth = date.toLocaleDateString('nl-NL', { day: '2-digit', month: 'short' });

      dayCard.innerHTML = `
        <div class="flex justify-between items-center text-sm mb-1">
          <span class="font-bold text-slate-700">Dag ${day.day}</span>
        </div>
        <div class="text-xs text-slate-500">${dayOfWeek}</div>
        <div class="text-sm font-semibold text-slate-600">${dayOfMonth}</div>
        <div class="text-xs text-slate-500 mt-2 truncate">${day.title}</div>
      `;

      dayCard.addEventListener('click', () => {
        activeDay = day.day;
        renderDetails(day.day);
        updateActiveCard();
      });
      timelineContainer.appendChild(dayCard);
    });
    updateActiveCard();
  }

  function renderDetails(dayNumber) {
    const dayData = workDays.find((d) => d.day === dayNumber);
    if (!dayData) {
      detailsContainer.innerHTML = `
        <div class="glass-card p-6 text-center detail-card-enter">
          <h3 class="text-xl font-bold text-slate-800">${t('welcomeTitle')}</h3>
          <p class="text-slate-600 mt-2">${t('welcomeText')}</p>
        </div>`;
      return;
    }
    let tasksHtml = '';
    let residentActionsHtml = '';

    if (editingMode) {
      tasksHtml = dayData.tasks
        .map(
          (task, index) => `
        <li class="flex items-center mb-2">
          <input type="text" value="${task.text}" data-type="tasks" data-id="${task.id}" class="flex-grow border rounded-md px-2 py-1 mr-2 text-slate-700">
          <button onclick="deleteItem(${dayData.day}, 'tasks', ${index})" aria-label="delete" class="text-red-500 hover:text-red-700 text-xl leading-none">🗑️</button>
        </li>`
        )
        .join('');
      tasksHtml += `<button onclick="addItem(${dayData.day}, 'tasks')" class="mt-4 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition">${t('newTask')}</button>`;

      residentActionsHtml = dayData.residentActions
        .map(
          (action, index) => `
        <li class="flex items-center mb-2">
          <input type="text" value="${action.text}" data-type="residentActions" data-id="${action.id}" class="flex-grow border rounded-md px-2 py-1 mr-2 text-slate-700">
          <button onclick="deleteItem(${dayData.day}, 'residentActions', ${index})" aria-label="delete" class="text-red-500 hover:text-red-700 text-xl leading-none">🗑️</button>
        </li>`
        )
        .join('');
      residentActionsHtml += `<button onclick="addItem(${dayData.day}, 'residentActions')" class="mt-4 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition">${t('newAction')}</button>`;
    } else {
      tasksHtml = dayData.tasks
        .map((task) => {
          const isCompleted = completedItems[task.id] || false;
          const checked = isCompleted ? 'checked' : '';
          const completedClass = isCompleted ? 'completed' : '';
          return `
            <li class="task-item ${completedClass}">
              <input type="checkbox" id="task-${task.id}" aria-label="${task.text}" ${checked}>
              <label for="task-${task.id}"><span>${task.text}</span></label>
            </li>`;
        })
        .join('');
      residentActionsHtml = dayData.residentActions
        .map((action) => {
          const isCompleted = completedItems[action.id] || false;
          const checked = isCompleted ? 'checked' : '';
          const completedClass = isCompleted ? 'completed' : '';
          return `
            <li class="task-item ${completedClass}">
              <input type="checkbox" id="action-${action.id}" aria-label="${action.text}" ${checked}>
              <label for="action-${action.id}"><span>${action.text}</span></label>
            </li>`;
        })
        .join('');
    }

    detailsContainer.innerHTML = `
      <div class="glass-card p-6 md:p-8 detail-card-enter">
        <h3 class="text-xl font-bold text-slate-800 mb-4">Details voor Dag ${dayData.day} (${new Date(dayData.date + 'T00:00:00').toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' })})</h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h4 class="font-semibold text-slate-700 mb-2 border-b pb-2">Werkzaamheden</h4>
            <ul class="list-none p-0 m-0" id="tasks-list">${tasksHtml}</ul>
          </div>
          <div>
            <h4 class="font-semibold text-slate-700 mb-2 border-b pb-2">Wat u moet doen</h4>
            <ul class="list-none p-0 m-0" id="resident-actions-list">${residentActionsHtml}</ul>
          </div>
        </div>
      </div>`;

    if (!editingMode) {
      detailsContainer.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.addEventListener('change', (event) => {
          const idParts = event.target.id.split('-');
          const itemId = parseInt(idParts[1]);
          window.toggleCompletion(event, itemId);
        });
      });
    }
  }

  function updateActiveCard() {
    const dayCards = document.querySelectorAll('.day-card');
    dayCards.forEach((card) => {
      card.classList.remove('active');
      if (parseInt(card.dataset.day) === activeDay) {
        card.classList.add('active');
      }
    });
  }

  function updateProgress() {
    let total = 0;
    let completed = 0;
    workDays.forEach((day) => {
      day.tasks.forEach((item) => {
        total++;
        if (completedItems[item.id]) completed++;
      });
      day.residentActions.forEach((item) => {
        total++;
        if (completedItems[item.id]) completed++;
      });
    });
    const progress = total ? (completed / total) * 100 : 0;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = progress === 100 ? t('progressDone') : `${Math.round(progress)}% voltooid`;
  }

  window.addItem = function (dayNumber, type) {
    const dayDataIndex = workDays.findIndex((d) => d.day === dayNumber);
    if (dayDataIndex === -1) return;
    if (type === 'tasks') {
      workDays[dayDataIndex].tasks.push({ id: newId(), text: '' });
    } else if (type === 'residentActions') {
      workDays[dayDataIndex].residentActions.push({ id: newId(), text: '' });
    }
    renderDetails(dayNumber);
  };

  window.deleteItem = function (dayNumber, type, index) {
    const dayDataIndex = workDays.findIndex((d) => d.day === dayNumber);
    if (dayDataIndex === -1) return;
    let removed;
    if (type === 'tasks') {
      removed = workDays[dayDataIndex].tasks.splice(index, 1)[0];
    } else if (type === 'residentActions') {
      removed = workDays[dayDataIndex].residentActions.splice(index, 1)[0];
    }
    if (removed) {
      delete completedItems[removed.id];
      saveCompletionState();
    }
    renderDetails(dayNumber);
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      const next = activeDay ? activeDay + 1 : 1;
      if (workDays.some((d) => d.day === next)) {
        activeDay = next;
        renderDetails(activeDay);
        updateActiveCard();
      }
    } else if (e.key === 'ArrowLeft') {
      const prev = activeDay ? activeDay - 1 : workDays.length;
      if (workDays.some((d) => d.day === prev)) {
        activeDay = prev;
        renderDetails(activeDay);
        updateActiveCard();
      }
    }
  });

  updateProgress();
  renderTimeline();
  renderDetails(activeDay);
});
