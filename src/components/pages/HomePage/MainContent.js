import React from 'react';
import './MainContent.css';
import { Avatar, extendTheme } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
}

const theme = extendTheme({ breakpoints })

function MainContent() {
    return (
      <main>
        <article>
          <h1>О нас</h1>
          <p>В рамках спецификации современных стандартов,
              сделанные на базе интернет-аналитики выводы лишь
              добавляют фракционных разногласий и разоблачены.
              Предварительные выводы неутешительны: постоянное
              информационно-пропагандистское обеспечение нашей
              деятельности предполагает независимые способы
              реализации как самодостаточных, так и внешне
              зависимых концептуальных решений.</p>
        </article>
        <Wrap
        spacing={{lg: 28, xl: 40, '2xl': 40}}
        padding={{lg: 5, xl: 10, '2xl': 10}}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <WrapItem flexDirection={'column'} alignItems={'center'}>
                <Avatar size={{lg: 'xl', xl: '2xl', '2xl': '2xl'}}
                name='Борисенко Н.А.'
                src='' style={{marginBottom: 10}}/>{' '}
                <h2>Борисенко Н.А.</h2>
            </WrapItem>
            <WrapItem flexDirection={'column'} alignItems={'center'}>
                <Avatar size={{lg: 'xl', xl: '2xl', '2xl': '2xl'}}
                name='Миронова К.В.'
                src='' style={{marginBottom: 10}}/>{' '}
                <h2>Миронова К.В.</h2>
            </WrapItem>
            <WrapItem flexDirection={'column'} alignItems={'center'}>
                <Avatar size={{lg: 'xl', xl: '2xl', '2xl': '2xl'}}
                name='Шишкова С.В.'
                src='' style={{marginBottom: 10}}/>{' '}
                <h2>Шишкова С.В.</h2>
            </WrapItem>
        </Wrap>
        <h1>История группы</h1>
        <article>
          <p>В 1962 г. в составе лаборатории проблем программированного обучения
была создана группа «Психологические проблемы построения школьных
учебников» под руков. Г.Г. Граник. С 1975 г. группа существовала как
самостоятельная единица (с 2015 г. – в составе лаборатории экопсихологии
развития и психодидактики (руков. – д-р психол. н., член-корр. РАО
В.И. Панов).</p><br />
          <p>Почти полвека (1962–2021) научный коллектив, возглавляемый
академиком РАО, доктором психол. наук, профессором Г.Г. Граник, работал
над созданием школьных учебников нового типа по русскому языку и учебных
книг по литературе, опираясь на психолого-дидактические исследования и
собственную оригинальную концепцию.</p><br />
          <p>Созданию учебников предшествовал ряд фундаментальных и практико-
ориентированных исследований. Среди них: исследования психологических
механизмов грамотной речи, приемов понимания и запоминания учебного и
художественного текста, развития воссоздающего воображения,
психологических основ интеграции учебных курсов русского языка и
литературы. Были определены основные принципы создания учебников нового
типа по русскому языку и учебных книг литературе: сопровождение всего
учебного процесса; учет физиологической специфики возраста; учет
психологических закономерностей понимания и запоминания изучаемого
материала; нацеленность на развитие творческого и воссоздающего
воображения; развитие самоконтроля и мн. др.</p><br />
          <p>За эти годы разработаны два принципиально новых направления в
педагогической психологии:</p>
          <p>1) «Школьный учебник» (Г.Г. Граник, С.М. Бондаренко, Л.А. Концевая,
Н.А. Борисенко, С.В. Шишкова);</p>
          <p>2) «Школьное литературоведение на психологической основе»
(Г.Г. Граник, Л.А. Концевая, К.В. Миронова).</p><br />
          <p>Результатом научных изысканий явились создание и апробация
целостного курса «Русская филология» для I и II ступеней образования.
Написаны свыше 50 учебников и учебных пособий по русскому языку и
литературе. С 2009 по 2015 гг. учебники имели гриф Министерства
образования и науки и входили в федеральный перечень учебников, в
настоящее время они используются как учебные пособия.</p><br />
          <p>Основной целью школьного курса русского языка в концепции
Г.Г. Граник является формирование у учащихся положительной
познавательной мотивации; понимания лингвистических закономерностей;
воспитание культурного человека, свободно владеющего грамотной устной и
письменной речью. В основу курса положены представления о
функционировании психологических механизмов, общих для грамотного
письма и восприятия художественной литературы: упреждение, удержание, прогнозирование, установка и т.д. Особое внимание уделяется проблеме работы
учащихся с книгой.</p><br />
          <p>К числу исследований, проводимых в группе <b>в настоящее время</b>, относятся:<br />
          &#8226; переработка учебников по русскому языку для 5-9 классов в соответствии с требованиями ФГОС нового (третьего) поколения;<br />
          &#8226; разработка учебных материалов для цифровой образовательной платформы (на сайте издательства «Мнемозина»), с использованием уже изданных учебников по русскому языку, что позволит индивидуализировать процесс обучения, выстроить систему дистанционного обучения для разных групп учащихся;<br />
          &#8226; разработка и апробация системы психодидактических принципов развития у подростков понимания лирики и приемов практической реализации данных принципов в учебной книге по литературе (в рамках развития направления «Школьное литературоведение на психологической основе»);<br />
          &#8226; исследование специфики работы воссоздающего воображения в процессе восприятия текста с экрана и с листа;<br />
          &#8226; изучение чтения подростков в новых социокультурных условиях трансформации чтения в цифровую среду, в частности, чтения с экрана;<br />
          &#8226; эмпирическое исследование понимания текста подростками 5-9 классов в процессе смыслового чтения с бумажных и электронных носителей;</p><br />
          <p>Реализация в учебниках и учебных книгах этих подходов соответствует перспективным направлениям филологического образования и отражает его современные приоритеты.</p>
        </article>
      </main>
    );
  }

export default MainContent;