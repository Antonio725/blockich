export const HOME_PAGE = "/";
export const ALL_POSTS_PAGE = "/all-posts";
export const USER_PROFILE_PAGE = "user-profile/:profileId";
export const WALLET_PAGE = "/wallet";
export const POST_PREVIEW_PAGE = "/preview/:postId";
export const PAGE_NOT_FOUND = "*";

export const generatePostPreviewLink = (postId) => {
  return POST_PREVIEW_PAGE.replace(":postId", postId);
};

export const generateUserProfileLink = (profileId) => {
  return USER_PROFILE_PAGE.replace("profileId", profileId);
};
