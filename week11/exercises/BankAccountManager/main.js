import mng from "./service.js";
import rl from 'readline-sync';



const actions = [
    , { "label": "Create Customer", "action": mng.createCustomer },
    { "label": "Show Customers", "action": mng.getAllCustomers },
    { "label": "Deposit", "action": mng.deposit },
    { "label": "Withdraw", "action": mng.withdraw },
    { "label": "Search Customer", "action": mng.searchCustomer },
    { "label": "Close Account", "action": mng.deactivateCustomer },
    { "label": "Show Statistics", "action": mng.showStatistics }
]
const menu = `${'='.repeat(50)}
                Actions Menu
${'='.repeat(50)}
`

let selections;

do {
    console.log(menu);
    
    selections = rl.keyInSelect(actions.map(a => a.label), "");
    if (selections >= 0){
    console.log(actions[selections].action());
    };
} while (selections !== -1);
    











