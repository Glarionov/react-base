const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

let formElements = [
    {type: 'text', name: 'text', text: 'text'},
    {type: 'number', name: 'number', text: 'number'},
    {type: 'textarea', name: 'textarea', text: 'textarea'},
    {type: 'date', name: 'date', text: 'date'},
    {type: 'file', name: 'file', text: 'file'},
    {type: 'select', name: 'select', text: 'select', options},
];

let validationRules = {
    text: {max: 6, min: 2},
    textarea: ['required'],
    number: {max: 3}
};

export {formElements, validationRules};
