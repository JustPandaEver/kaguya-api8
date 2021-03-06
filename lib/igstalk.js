
const ig = require("instatouch");
const sID = "38420191934%3A43Y602oEBoI9SJ%3A21";
//const sID = process.env.sID;

const options = {
  count: 0,
  mediaType: "all",
  timeout: 0,
  session: "sessionid=" + sID
};

const IGStalk = (username = 'instagram') => new Promise((resolve, reject) => {
    try {
      ig.getUserMeta(username, options)
        .then((data) => {
          resolve({
            data: {
              profile: data.graphql.user.profile_pic_url,
              profilehd: data.graphql.user.profile_pic_url_hd,
              fullname: data.graphql.user.full_name,
              private: data.graphql.user.is_private,
              verified: data.graphql.user.is_verified,
              bio: data.graphql.user.biography,
              follower: data.graphql.user.edge_followed_by.count,
              following: data.graphql.user.edge_follow.count,
              conneted_fb: data.graphql.user.connected_fb_page,
              videotimeline: data.graphql.user.edge_felix_video_timeline.count,
              timeline: data.graphql.user.edge_owner_to_timeline_media.count,
              savedmedia: data.graphql.user.edge_saved_media.count,
              collections: data.graphql.user.edge_media_collections.count
            }
          });
        })
        .catch((err) =>
          reject({
            message: "user tidak di temukan"
          })
        );
    } catch (err) {
      reject(err);
    }
  });

module.exports = IGStalk