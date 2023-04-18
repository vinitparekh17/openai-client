export const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, TWITTER_CLIENT_ID, TWITTER_CLIENT_SECRET, MONGODB_URI } = process.env;

switch (true) {
    case !GOOGLE_CLIENT_ID:
        new Error("Missing Google client id");
        break;
    case !GOOGLE_CLIENT_SECRET:
        new Error("Missing Google client secret");
        break;
    case !TWITTER_CLIENT_ID:
        new Error("Missing twitter client id");
        break;
    case !TWITTER_CLIENT_SECRET:
        new Error("Missing twitter client secret");
        break;
    case !MONGODB_URI:
        new Error("Missing mongodb uri");
    default:
        break;
}