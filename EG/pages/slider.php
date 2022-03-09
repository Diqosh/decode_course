            <div class="slider__wrapper">
                <div class="slider_big">
                    <?php $result = mysqli_query($connect, "select * from event_games left outer join games on event_games.item_id=games.id");
                    while ($row = mysqli_fetch_assoc($result)): ?>
                        <div class="products__item">
                            <div class="product__image">
                                <img src="<?=$row['image_path']?>" alt="">
                            </div>
                        </div>
                    <?php endwhile; ?>
                </div>
<!--                <div class="slider">-->
<!--                    --><?php //$result = mysqli_query($connect, "select * from event_games left outer join games on event_games.item_id=games.id");
//                    while ($row = mysqli_fetch_assoc($result)): ?>
<!--                        <div class="products__item">-->
<!--                            <div class="product__image">-->
<!--                                <img src="--><?//=$row['image_path']?><!--" alt="">-->
<!--                            </div>-->
<!--                            <div class="product__title">-->
<!--                                --><?// //= $row["name"] ?>
<!--                            </div>-->
<!--                        </div>-->
<!--                    --><?php //endwhile; ?>
                </div>
            </div>