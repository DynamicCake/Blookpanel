import './style.scss'
import { makeDraggable, injectPanelHtml } from './init_page'
import { hookSetState, getReactHandler } from './lib/lib'
import { StateChangeEvent, EventData, deepDiffMapper } from './lib/state_change_event'

const panelId = "blook-panel";


injectPanelHtml(panelId, "Blook Panel");

let mainPanel = document.getElementById(panelId)!;
let panelHeader = document.getElementById(`${panelId}-header`)!;
let panelItems = document.getElementById(`${panelId}-items`)!;

makeDraggable(mainPanel, panelHeader);

let stateChangeEvent = new StateChangeEvent();
hookSetState(getReactHandler, stateChangeEvent);

stateChangeEvent.subscribeWithId(123, function(data: EventData) {
    console.log(deepDiffMapper.map(data.before, data.after))
});

panelItems.innerHTML = '<p>loaded!<p>'