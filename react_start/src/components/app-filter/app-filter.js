import './app-filter.css'

function AppFilter(){
    return (
        <div className={'btn-group'}>
            <button
            className={'btn btn-light'}
            type='button'>All
            </button>
            <button
                className={'btn btn-outline-light'}
                type='button'>
                На повышение
            </button>
            <button
                className={'btn btn-outline-light'}
                type='button'>
                з.п. больше 1000
            </button>
        </div>
    )
}

export default AppFilter