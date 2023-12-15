import ProfilePicture from 'src/images/Default-Profile-Picture.jpg';

export default function SettingsPage(){
    return(
<div class="container-fluid main" style="height:100vh;padding-left:0px;">
    <div class="d-block d-md-none menu">
        <div class="bar"></div>
    </div>
        
<div class="expand-menu nav flex-column">
    <a href="#" class="nav-link active mt-auto"><i class="far fa-user-circle"></i> Profile</a>
    <a href="#" class="nav-link"><i class="far fa-bell"></i> Notifications</a>
    <a href="#" class="nav-link"><i class="far fa-file-alt"></i> Billing Info</a>
    <a href="#" class="nav-link mb-auto"><i class="fas fa-cogs"></i> General</a>    
</div>

<div class="row align-items-center" style="height:100%">
    <div class="col-md-3 d-none d-md-block" style="height:100%" >
        <div class="container-fluid nav sidebar flex-column">
        <a href="#" class="nav-link active mt-auto"><i class="far fa-user-circle"></i> Profile</a>
        <a href="#" class="nav-link"><i class="far fa-bell"></i> Notifications</a>
        <a href="#" class="nav-link"><i class="far fa-file-alt"></i> Billing Info</a>
        <a href="#" class="nav-link mb-auto"><i class="fas fa-cogs"></i> General</a>
    </div>
</div>

<div class="col-md-9">
    <div class="container content clear-fix">
        <h2 class="mt-5 mb-5">Profile Settings</h2>
        <div class="row" style="height:100%">
            <div class="col-md-3">
                <div href='#!' class='d-inline' img src={ProfilePicture} alt="profile picture" />
            </div>
            
            <div class="col-md-9">
                <div class="container">
                    
                            
                            
                            <div class="row mt-5">
                            
                                <div class="col">
                                
                                    <button type="button" class="btn btn-primary btn-block">Save Changes</button>
                                
                                </div>
                                
                                <div class="col">
                                
                                    <button type="button" class="btn btn-default btn-block">Cancel</button>
                                
                                </div>
                            
                            </div>                    
                    </div>         
                </div>    
            </div> 
        </div>       
        </div>
    </div>
</div>
    );
}