import CareerPage from '../pages/Career'
import IntroducePage from '../pages/Introduce'
import TechPage from '../pages/Tech'

export const Sidebar = {
  profile: 'http://www.newsworks.co.kr/news/photo/201911/410922_306527_4950.jpg',
  name: '박현지',
  description: '',
  contents: [
    {
      title: '소개',
      path: '/',
      component: IntroducePage
    },
    {
      title: '경력',
      path: '/career',
      component: CareerPage
    },
    {
      title: '기술',
      path: '/tech',
      component: TechPage
    }
  ]
}

export const Tech = {
  title: '기술',
  contents: [
    {
      title: '타이틀 1',
      contents: [
        {
          subTitle: '서브 타이틀 1',
          subContents: [ '서브 컨텐츠 1' ]
        },
        {
          subTitle: '서브 타이틀 2',
          subContents: [ '서브 컨텐츠 2' ]
        }
      ]
    },
    {
      title: '타이틀 2',
      contents: [
        {
          subTitle: '서브 타이틀 1',
          subContents: [ '서브 컨텐츠 1', '서브 컨텐츠 2' ]
        }
      ]
    }
  ]
}

export const Career = {
  title: '경력',
  contents: [
    {
      title: '회사 1',
      contents: [
        {
          subTitle: '프로젝트 1',
          subContents: [ '뭘 만듬1', '뭘 만듬2' ]
        }
      ]
    }
  ]
}

export const Interest = {
  title: '관심사',
  contents: [
    {
      title: 'React',
      contents: [
        {
          subTitle: '리액트로 만듬 1',
          subContents: [ '뭘 만듬1', '뭘 만듬1' ]
        }
      ]
    }
  ]
}
