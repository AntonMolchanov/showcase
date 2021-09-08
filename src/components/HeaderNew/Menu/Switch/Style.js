export function generateStyles () {
    return {
        switch: {
            position: "relative",
            display: 'inline-block',
            width: '40px',
            height: '24px',
            background: '#9A9BA2'
        },
        input: {
            opacity: 0,
            width: 0,
            height: 0
        },
        slider: {
            position: 'absolute',
            cursor: 'pointer',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: '#ccc',

            "&:before": {
                position: 'absolute',
                content: '',
                height: '14px',
                width: '14px',
                left: '2px',
                bottom: '2px',
                backgroundColor: '#FFFFFF',
            }
        }
    }
}