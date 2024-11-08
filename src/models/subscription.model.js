import mongoose, {Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, //ones who is subscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, // one whom "subscriber" is subscribing
        ref: "User"
    }
}, {timestamps: true})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)