export const FOLLOW_TOPIC = "FOLLOW_TOPIC";
export const UNFOLLOW_TOPIC = "UNFOLLOW_TOPIC";

export const followTopic = id => {
  return {
    type: FOLLOW_TOPIC,
    id
  };
};

export const unfollowTopic = id => {
  return {
    type: UNFOLLOW_TOPIC,
    id
  };
};
