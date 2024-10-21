var palette = [
    'white',
    'white',
    '#ce93d8',
    '#f48fb1',
    '#90caf9',
    '#80cbc4',
    '#c5e1a5',
    '#ffe082'
];

var chart = JSC.chart('chartDiv', {
    type: 'organizational down',
    defaultTooltip: {
        asHTML: true,
        outline: 'none',
        zIndex: 10
    },
    defaultPoint: {
        focusGlow: false,
        connectorLine: {
            width: 1,
            color: '#e0e0e0'
        },
        annotation: {
            padding: 3,
            asHTML: true,
            margin: [12, 2],
            label: {
                text:
                    '<img width=64 height=64 margin_bottom=4 src=%photo><br/><div class="personDescription"><b>%position</b><br/>%name<br/></div>',
                autoWrap: false
            }
        },
        outline_width: 0,
        color: '#333333'
    },
    series: [{ points: getPoints() }]
});

function getPoints() {
    var points = [
        {
            name: 'Aubrey Shepherd',
            id: 'gm',
            attributes: {
                position: 'General Manager',
                photo:
                    '/src/assets/react.svg',
                role: ''
            }
        },
        {
            name: 'Blake Simmons',
            id: 'pl',
            parent: 'gm',
            attributes: {
                position: 'Product Leader',
                photo:
                    '/src/assets/react.svg',
                role: 'leader'
            }
        },
        {
            name: 'Jade Mills',
            id: 'pl_fed',
            parent: 'pl',
            attributes: {
                position: 'Front End Developer',
                photo:
                    '/src/assets/react.svg',
                role: ''
            }
        },
        {
            name: 'Kerry Eason',
            id: 'pl_ad',
            parent: 'pl',
            attributes: {
                position: 'App Developer',
                photo:
                    '/src/assets/react.svg',
                role: ''
            }
        },
        {
            name: 'Rorie Woodham',
            id: 'pl_sd',
            parent: 'pl',
            attributes: {
                position: 'Server Developer',
                photo:
                    '/src/assets/react.svg',
                role: ''
            }
        },
        {
            name: 'Grier Spear',
            id: 'dtl',
            parent: 'gm',
            attributes: {
                position: 'Design Team Leader',
                photo:
                    '/src/assets/react.svg',
                role: 'leader'
            }
        },
        {
            name: 'Daly Walsh',
            id: 'dtl_d1',
            parent: 'dtl',
            attributes: {
                position: 'Designer',
                photo:
                    '/src/assets/react.svg',
                role: ''
            }
        },
        {
            name: 'Ridley Tucker',
            id: 'dtl_d2',
            parent: 'dtl',
            attributes: {
                position: 'Designer',
                photo:
                    '/src/assets/react.svg',
                role: ''
            }
        },
        {
            name: 'Wisdom Debenham',
            id: 'ml',
            parent: 'gm',
            attributes: {
                position: 'Marketing Leader',
                photo:
                    '/src/assets/react.svg',
                role: 'leader'
            }
        },
        {
            name: 'Parker Graves',
            id: 'ml_b',
            parent: 'ml',
            attributes: {
                position: 'Blogger',
                photo:
                    '/src/assets/react.svg',
                role: ''
            }
        },
        {
            name: 'Lennox Cleveland',
            id: 'ml_am',
            parent: 'ml',
            attributes: {
                position: 'Ads Marketer',
                photo:
                    '/src/assets/react.svg',
                role: ''
            }
        },
        {
            name: 'Sloan Baldwin',
            id: 'ml_snsm',
            parent: 'ml',
            attributes: {
                position: 'SNS Marketer',
                photo:
                    '/src/assets/react.svg',
                role: ''
            }
        },
        {
            name: 'Briar Wootton',
            id: 'ml_b2bm',
            parent: 'ml',
            attributes: {
                position: 'B2B Marketer',
                photo:
                    '/src/assets/react.svg',
                role: ''
            }
        }
    ];

    // Remove units connector lines 
    points.forEach(function (point, i) {
        if (point.attributes.role === 'leader') {
            JSC.merge(point, { annotation_width: 222 });
        }
    });
    return points;
} 