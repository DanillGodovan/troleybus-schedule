const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/troleybus_schedules', (req, res) => {
    res.send(
        [
            {
                key: '1',
                title: '1:ЧЛФЗ "АВРОРА" - САНАТОРІЙ "УКРАЇНА"',
                stops: [
                    {
                        direction: 'ЧЛФЗ "АВРОРА" - САНАТОРІЙ "УКРАЇНА"',
                        points: [
                            {key: 'члфзаврора', title: 'ЧЛФЗ "Аврора"', time: '10:00'},
                            {key: 'заводхімреактив', title: 'завод "Хімреактив"', time: '10:05'},
                            {key: 'док', title: 'ДОК', time: '10:08'},
                            {key: 'хлібозавод', title: 'Хлібозавод', time: '10:12'},
                            {key: 'вулдобровольського', title: 'вул. Добровольського', time: '10:15'},
                            {key: 'пл700річчячеркас', title: 'пл. 700-річчя Черкас', time: '10:18'},
                            {key: 'університет', title: 'Університет', time: '10:23'},
                            {key: 'depotcenter', title: 'DEPO\'t center', time: '10:27'},
                            {key: 'вулновопречистенська', title: 'вул. Новопречистенська', time: '10:35'},
                            {key: 'вулкривалівська', title: 'вул. Кривалівська', time: '10:40'},
                            {key: 'вулпастерівська', title: 'вул. Пастерівська', time: '10:45'},
                            {key: 'плбогданахмельницького', title: 'пл. Богдана Хмельницького', time: '10:50'},
                            {key: 'будинокторгівлі', title: 'Будинок Торгівлі', time: '10:55'},
                            {key: 'плсоборна', title: 'пл. Соборна', time: '11:00'},
                            {key: 'плслави', title: 'пл. Слави', time: '11:10'},
                            {key: 'вулпушкіна', title: 'вул. Пушкіна', time: '11:15'},
                            {key: 'університет', title: 'Університет', time: '11:20'},
                            {key: 'вулказбетська', title: 'вул. Казбетська', time: '11:25'},
                            {key: 'вулможайського', title: 'вул. Можайського', time: '11:30'},
                            {key: 'агропроммеханізація', title: 'Агропроммеханізація', time: '11:35'},
                            {key: 'міськалікарня1', title: 'Міська лікарня №1', time: '11:40'},
                            {key: 'обласналікарня', title: 'Обласна лікарня', time: '11:45'},
                            {key: 'мнсоснівка', title: 'м/н Соснівка', time: '11:50'},
                            {key: 'міськалікарня2', title: 'Міська лікарня №2', time: '11:55'},
                            {key: 'лісгосп', title: 'Лісгосп', time: '12:00'},
                            {key: 'санаторійукраїна', title: 'санаторій "Україна"', time: '12:05'}
                        ]
                    },
                    {
                        direction: 'САНАТОРІЙ "УКРАЇНА" - ЧЛФЗ "АВРОРА"',
                        points: [
                            {key: 'санаторійукраїна', title: 'санаторій "Україна"', time: '12:10'},
                            {key: 'автошколабогдан', title: 'Автошкола "Богдан"', time: '12:15'},
                            {key: 'міськалікарня2', title: 'Міська лікарня №2', time: '12:20'},
                            {key: 'мнсоснівка', title: 'м/н Соснівка', time: '12:25'},
                            {key: 'обласналікарня', title: 'Обласна лікарня', time: '12:30'},
                            {key: 'міськалікарня1', title: 'Міська лікарня №1', time: '12:35'},
                            {key: 'агропроммеханізація', title: 'Агропроммеханізація', time: '12:40'},
                            {key: 'вулможайського', title: 'вул. Можайського', time: '12:45'},
                            {key: 'вулказбетська', title: 'вул. Казбетська', time: '12:50'},
                            {key: 'вулкирилованавимогу', title: 'вул. Кирилова (на вимогу)', time: '12:55'},
                            {key: 'університет', title: 'Університет', time: '13:00'},
                            {key: 'вулпушкіна', title: 'вул. Пушкіна', time: '13:05'},
                            {key: 'плсоборна', title: 'пл. Соборна', time: '13:10'},
                            {key: 'драмтеатр', title: 'Драмтеатр', time: '13:15'},
                            {key: 'будинокторгівлі', title: 'Будинок Торгівлі', time: '13:20'},
                            {key: 'плбогданахмельницького', title: 'пл. Богдана Хмельницького', time: '13:25'},
                            {key: 'вулпастерівська', title: 'вул. Пастерівська', time: '13:30'},
                            {key: 'вулкривалівська', title: 'вул. Кривалівська', time: '13:35'},
                            {key: 'вулновопречистенська', title: 'вул. Новопречистенська', time: '13:40'},
                            {key: 'вулюріяіллєнка', title: 'вул. Юрія Іллєнка', time: '13:45'},
                            {key: 'університет', title: 'Університет', time: '13:50'},
                            {key: 'пл700річчячеркас', title: 'пл. 700-річчя Черкас', time: '13:55'},
                            {key: 'хлібозавод', title: 'Хлібозавод', time: '14:00'},
                            {key: 'консервнийкомбінат', title: 'Консервний комбінат', time: '14:05'},
                            {key: 'док', title: 'ДОК', time: '14:10'},
                            {key: 'члфзаврора', title: 'ЧЛФЗ "Аврора"', time: '14:15'},
                        ]
                    }
                ]
            }]
    )
});

app.listen(process.env.PORT || 8081);