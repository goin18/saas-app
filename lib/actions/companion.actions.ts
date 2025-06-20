'use server'; // this is a server action

import {auth} from "@clerk/nextjs/server";
import {createSupabaseClient} from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export const createCompanion = async (formData: CreateCompanion) => {
    const { userId: author } = await auth();
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('companions') // access the table
        .insert({...formData, author }) // insert the data into the table
        .select(); // select the data from the table

    if(error || !data) throw new Error(error?.message || 'Failed to create a companion'); // if there is an error, throw an error

    revalidatePath('/'); // revalidate the path

    return data[0];
}