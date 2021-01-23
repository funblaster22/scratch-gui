import sharedMessages from '../shared-messages';

// use the default message if a translation function is not passed
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    return ({
        targets: [
            {
                isStage: true,
                name: 'Stage',
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                        name: translator(sharedMessages.backdrop, {index: 1}),
                        md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 240,
                        rotationCenterY: 180
                    }
                ],
                sounds: [],
                volume: 100
            },
            {
                isStage: false,
                name: 'Thumbnail',
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                    ')O=6IAk(xIDb-TO99E44': {
                        opcode: 'event_whenflagclicked',
                        next: 'veXK-Tq~A?w/2oeoWC0;',
                        parent: null,
                        inputs: {},
                        fields: {},
                        shadow: false,
                        topLevel: true,
                        x: 20,
                        y: 20
                    },
                    'veXK-Tq~A?w/2oeoWC0;': {
                        opcode: 'motion_gotoxy',
                        next: 'p])=?%jm#ttY0:emjIIq',
                        parent: ')O=6IAk(xIDb-TO99E44',
                        inputs: {
                            X: [1, [4, '0']],
                            Y: [1, [4, '0']]
                        },
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    'p])=?%jm#ttY0:emjIIq': {
                        opcode: 'looks_show',
                        next: 'LgfsU%]lM_ocJtR`m/D3',
                        parent: 'veXK-Tq~A?w/2oeoWC0;',
                        inputs: {},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    'LgfsU%]lM_ocJtR`m/D3': {
                        opcode: 'looks_seteffectto',
                        next: null,
                        parent: 'p])=?%jm#ttY0:emjIIq',
                        inputs: {
                            VALUE: [1, [4, '100']
                            ]
                        },
                        fields: {
                            EFFECT: [
                                'GHOST',
                                null
                            ]
                        },
                        shadow: false,
                        topLevel: false
                    }
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                        name: '',
                        md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 240,
                        rotationCenterY: 180
                    }
                ],
                sounds: [],
                volume: 100,
                visible: true,
                x: 0,
                y: 0,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            }
        ],
        meta: {
            semver: '3.0.0',
            vm: '0.1.0',
            agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36' // eslint-disable-line max-len
        }
    });
};


export default projectData;
