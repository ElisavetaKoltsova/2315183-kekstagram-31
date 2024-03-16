import { COMMENT_MESSAGES, USER_NAMES, RangeIDComment, AvatarRandomNumber } from './consts.js';
import { getRandomInteger, getRandomArrayElement, createRandomIdFromRangeGenerator } from './utils.js';

const generateIdComments = createRandomIdFromRangeGenerator(RangeIDComment.MIN, RangeIDComment.MAX);

const createComment = () => ({
  id: generateIdComments(),
  avatar: `img/avatar-${getRandomInteger(AvatarRandomNumber.MIN, AvatarRandomNumber.MAX)}.svg`,
  message: `${getRandomArrayElement(COMMENT_MESSAGES)} ${getRandomArrayElement(COMMENT_MESSAGES)}`,
  name: getRandomArrayElement(USER_NAMES)
});


export { createComment };
