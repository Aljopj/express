import EmpSchema from "./models/worker.model.js"
import UserSchema from "./models/user.model.js"
import bcrypt from "bcrypt"
export async function  addEmployee(req,res){
    const{ID,name,salary,designation,experience,phone,email,profile}=req.body
    try {
        // console.log(req.body);
        const{ID,name,salary,designation,experience,phone,email,profile}=req.body

        let checkID=await EmpSchema.findOne({ID})
        if(!checkID){
            await EmpSchema.create({ID,name,salary,designation,experience,phone,email,profile}).then((data)=>{
                res.status(201).send({msg:data})
                
            }).catch((error)=>{
                res.status(201).send({msg:error})
            })

        }
        else{
            res.status(400).send({msg:"ID Already Exist"}) 
        }


    } catch (error) {
        
    }
}

// getemployee

export async function getEmployee(req,res){
    try {
        const employee=await EmpSchema.find()
        console.log(employee);
        res.status(200).send(employee)
        

    } catch (error) {
        console.log(error);
        
        
    }
}


// get employee by ID

export async function getEmploy(req,res){
    try {
        console.log(req.params);
        const _id=req.params;
        const employee=await EmpSchema.findOne({_id})
        console.log(employee);
        res.status(200).send(employee)
        

    } catch (error) {
        console.log(error);
        
        
    }
}

// edit employee

export async function editEmployee(req,res){
    try {
        console.log(req.params);
        const _id=req.params;
        const employee=await EmpSchema.findOne({_id})
        console.log(employee);
        res.status(200).send(employee)
        

    } catch (error) {
        console.log(error);
        
        
    }
}



export async function updateEmployee(req,res){
    try {
        console.log(req.params);
        const _id=req.params;
        console.log(req.body);
        const{ID,name,salary,designation,experience,phone,email,profile}=req.body
        // console.log(ID,name,salary,designation,experience,phone,email,profile);
        // // Fields empty
        if(!(ID&&name&&salary&&designation&&experience&&phone&&email)){
            return res.status(404).send({msg:"Fields Are Empty"})
        }
        // id already exist

        await EmpSchema.updateOne({_id},{$set:{ID,name,salary,designation,experience,phone,email,profile}}).then(()=>{
            res.status(201).send({msg:"update successfully"})
            
        }).catch((error)=>{
            res.status(404).send({msg:error})
        })
    
    } catch (error) {
        console.log(error);
        
        
    }
}


// delete employee


export async function deleteEmployee(req,res){
    try {
        console.log(req.params);
        const _id=req.params;
        console.log(_id);
        await EmpSchema.deleteOne({_id}).then(()=>{
            res.status(200).send({msg:"Deleted"})  
        }).catch((error)=>{
            res.status(404).send({msg:error})  
        })
       

    } catch (error) {
        console.log(error);
        
        
    }
}


// autheiction

export async function UserEmployee(req,res) {
   console.log(req.body);
const{username,email,password,cpassword}=req.body
    if(!(username&&email&&password&&cpassword))
        return res.status(404).send({msg:"fields are empty"});
    const users=await UserSchema.findOne({email});
    console.log(users);
    // if(users)
    //     return res.status(404).send({msg:"email already exist"});
    // if(password!==cpassword)
    //     return res.status(404).send({msg:"password doesn't match"})
    // bcrypt.hash(password,10).then(async(hashedPassword)=>{
    //     console.log(hashedPassword);
    //     await UserSchema.create({username,email,password:hashedPassword}).then(()=>{
    //         res.status(200).send({msg:"successfully registered"})
    //     }).catch(()=>{
    //         res.status(404).send({msg:"not registered"})
    //     })
    //     .catch((error)=>{
    //          return res.status(404).send({msg:error})
             
    //     })
    // })
}

// export async function signIn(req,res) {
//     console.log("hello");
//     try {
//         const {email,password}=req.body
//         console.log(req.body);
//         if(!(email&&password))
//             return res.status(404).send({msg:"fields are empty"})
//           const user=await UserSchema.findOne({email});
//           if(!user)
//           return res.status(404).send({msg:"invaild email"})
//           const Success=await bcrypt.compare(password,user.password)
//           console.log(Success);
          
//         //   if(Success!=true)
//         //   return res.status (404).send({msg:"invaild password"})       
//     } catch (error) {
//         res.status(404).send(error)
//     }

    
    
// }