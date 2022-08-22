import Creator from '../../basic/common/creator';
import TextbookPageView from '../../pages/TextbookPage/textbook.view';
export default class WordGroupView {
  words;
  constructor(textbook: TextbookPageView) {
    this.words = new Creator(textbook.words.node, 'div', 'words__container');
  }
}
