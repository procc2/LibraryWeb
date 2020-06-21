<?php
namespace App\Http\Controllers\Traits;

use App\Permission;
use App\Role;

trait HasPermissionsTrait {

   public function roles() {
      return $this->belongsToMany(Role::class,'users_roles','user_id');

   }

   public function permissions() {
      return $this->belongsToMany(Permission::class,'users_permissions','user_id');

   }

   public function hasRole($roles) {
        foreach ($roles as $role) {
            if ($this->roles->contains('slug', $role)) {
                return true;
            }
        }
        return false;
    }
     
    public function hasPermission($permission) {
        return (bool) $this->permissions->where('slug', $permission->slug)->count();
    }

    // protected function getAllPermissions($permissions)
    // {
    //     return Permission::whereIn('id', $permissions)->get();
    // }

    // public function givePermissionsTo($permissions) {
    //     // $permissions = $this->getAllPermissions($permissions);
    //     if($permissions === null) {
    //        return $this;
    //     }
    //     return $this->permissions()->sync($permissions);
    // }

    // public function deletePermissions(...$permissions) {
    //     $permissions = $this->getAllPermissions($permissions);
    //     $this->permissions()->detach($permissions);
    //     return $this;
    // }
}