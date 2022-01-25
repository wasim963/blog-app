import React from 'react';
import './singlePost.scss';

import singlePostImage from '../../assets/images/post-image.jpg';



export const SinglePost = () => {
  return(
    <div className='ui-singlePost'>
        <div className="ui-singlePost__wrapper">
            <img className='ui-singlePost__wrapper__image' src={singlePostImage} alt="Single Post Pic" srcset="" />
            <div className="ui-singlePost__wrapper__header">
                <p className="ui-singlePost__wrapper__header__title">
                    Lorem ipsum dolor sit amet.
                </p>
                <div className="ui-singlePost__wrapper__header__icons">
                    <i className="ui-singlePost__wrapper__header__icons__icon far fa-edit"></i>
                    <i className="ui-singlePost__wrapper__header__icons__icon far fa-trash-alt"></i>
                </div>
            </div>
            <div className="ui-singlePost__wrapper__info">
                <div className="ui-singlePost__wrapper__info__writer">
                    <span className='ui-singlePost__wrapper__info__writer__title' >Author: </span>
                    <span className='ui-singlePost__wrapper__info__writer__value' >Safak</span>
                </div>
                <div className="ui-singlePost__wrapper__info__date">1 hour ago</div>
            </div>
            <div className="ui-singlePost__wrapper__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reiciendis nesciunt veniam obcaecati quo,
                eaque tempora, ea placeat optio maxime aliquam repellat neque consequuntur necessitatibus sit delectus beatae
                molestiae quibusdam?
                Laudantium eius incidunt nemo quaerat placeat consequatur iste,
                impedit eos adipisci porro doloremque cum non ullam veniam optio totam deserunt molestiae aliquam aliquid,
                dolorem ratione. Amet ex dolore inventore dolores.
                Unde ipsa illo quos ducimus ut minima nisi eius laboriosam nostrum sint eligendi,
                mollitia debitis ea necessitatibus cum voluptatum aperiam provident ipsam voluptas at voluptates labore est.
                Impedit, consequuntur libero.
                Magnam vel sit laudantium praesentium suscipit veritatis, quae quod repudiandae amet dignissimos excepturi nemo
                laboriosam optio aliquid officiis reiciendis ratione cupiditate culpa ea quam molestias dicta? Ut atque voluptatem fuga!
                Facere adipisci illum consequuntur reprehenderit dolorem, ipsam, nobis eius ex nihil dolore quos, autem deserunt! Magni
                eius optio perspiciatis, pariatur qui quae doloribus repellendus non harum perferendis deserunt, sed minus.
            </div>
        </div>
    </div>
  );
};
