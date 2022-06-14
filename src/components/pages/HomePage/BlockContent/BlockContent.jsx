import React from 'react';
import doc from './doc2.jpg'

function BlockContent(props) {
    return (
        <div>

            <div>
                <h1>К врачу не выходя из дома</h1>
                <div>Просто запишитесь на сайтеб будьте здоровы</div>

                <span>
                    <h5>Больше функций и услуг</h5>
                    <p>Будет доступно в ближайшее время.
                    Наберитесь терпения 
                    </p>
                </span>
            </div>
            <div>
                <img src={doc} />
            </div>


        </div>
    );
}

export default BlockContent;