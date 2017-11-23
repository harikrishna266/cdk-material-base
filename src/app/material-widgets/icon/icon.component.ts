import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'cdk-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
	public showIconsCode;
	basicIconshtmlsource : string = `<mat-tab-group>
	<mat-tab label="Example">
		<mat-card class="example at-elevation-z12">
			<mat-icon class="space" aria-label="Example icon-button with a heart icon">favorite</mat-icon>
			<mat-icon class="space">home</mat-icon>
			<mat-icon class="space">menu</mat-icon>
			<mat-icon class="space">code</mat-icon>
			<mat-icon class="space">code</mat-icon>
			<mat-icon class="space">assignment</mat-icon>
			<mat-icon class="space">delete</mat-icon>
			<mat-icon class="space">accessibility</mat-icon>
			<mat-icon class="space">backup</mat-icon>
			<mat-icon class="space">autorenew</mat-icon>
			<mat-icon class="space">bookmark</mat-icon>
			<mat-icon class="space">build</mat-icon>
			<mat-icon class="space">event</mat-icon>
			<mat-icon class="space">help</mat-icon>
			<mat-icon class="space">label</mat-icon>
			<mat-icon class="space">extension</mat-icon>
			<mat-icon class="space">info</mat-icon>
			<mat-icon class="space">https</mat-icon>
			<mat-icon class="space">input</mat-icon>
			<mat-icon class="space">launch</mat-icon>
			<mat-icon class="space">3d_rotation</mat-icon>
			<mat-icon class="space">accessibility</mat-icon>
			<mat-icon class="space">accessible</mat-icon>
			<mat-icon class="space">account_balance</mat-icon>
			<mat-icon class="space">account_balance_wallet</mat-icon>
			<mat-icon class="space">account_box</mat-icon>
			<mat-icon class="space">account_circle</mat-icon>
			<mat-icon class="space">add_shopping_cart</mat-icon>
			<mat-icon class="space">alarm</mat-icon>
			<mat-icon class="space">alarm_add</mat-icon>
			<mat-icon class="space">alarm_off</mat-icon>
			<mat-icon class="space">alarm_on</mat-icon>
			<mat-icon class="space">all_out</mat-icon>
			<mat-icon class="space">android</mat-icon>
			<mat-icon class="space">bookmark</mat-icon>
			<mat-icon class="space">announcement</mat-icon>
			<mat-icon class="space">aspect_ratio</mat-icon>
			<mat-icon class="space">assessment</mat-icon>
			<mat-icon class="space">bug_report</mat-icon>
			<mat-icon class="space">cached</mat-icon>
			<mat-icon class="space">compare_arrows</mat-icon>
			<mat-icon class="space">copyright</mat-icon>
			<mat-icon class="space">credit_card</mat-icon>
			<mat-icon class="space">dashboard</mat-icon>
			<mat-icon class="space">description</mat-icon>
			<mat-icon class="space">done_all</mat-icon>
			<mat-icon class="space">eject</mat-icon>
			<mat-icon class="space">exit_to_app</mat-icon>
			<mat-icon class="space">find_replace</mat-icon>
			<mat-icon class="space">get_app</mat-icon>
			<mat-icon class="space">gif</mat-icon>
			<mat-icon class="space">group_work</mat-icon>
			<mat-icon class="space">help</mat-icon>
			<mat-icon class="space">compare_arrows</mat-icon>
			<mat-icon class="space">history</mat-icon>
			<mat-icon class="space">http</mat-icon>
			<mat-icon class="space">important_devices</mat-icon>
			<mat-icon class="space">language</mat-icon>
			<mat-icon class="space">list</mat-icon>
			<mat-icon class="space">note_add</mat-icon>
			<mat-icon class="space">open_in_browser</mat-icon>
			<mat-icon class="space">open_in_new</mat-icon>
			<mat-icon class="space">open_with</mat-icon>
			<mat-icon class="space">pageview</mat-icon>
			<mat-icon class="space">power_settings_new</mat-icon>
			<mat-icon class="space">print</mat-icon>
			<mat-icon class="space">query_builder</mat-icon>
			<mat-icon class="space">question_answer</mat-icon>
			<mat-icon class="space">receipt</mat-icon>
			<mat-icon class="space">remove_shopping_cart</mat-icon>
			<mat-icon class="space">reorder</mat-icon>
			<mat-icon class="space">report_problem</mat-icon>
			<mat-icon class="space">restore</mat-icon>
			<mat-icon class="space">restore_page</mat-icon>
			<mat-icon class="space">room</mat-icon>
			<mat-icon class="space">search</mat-icon>
			<mat-icon class="space">settings</mat-icon>
			<mat-icon class="space">star_rate</mat-icon>
			<mat-icon class="space">subject</mat-icon>
			<mat-icon class="space">supervisor_account</mat-icon>
			<mat-icon class="space">swap_horiz</mat-icon>
			<mat-icon class="space">swap_vert</mat-icon>
			<mat-icon class="space">thumb_down</mat-icon>
			<mat-icon class="space">thumb_up</mat-icon>
			<mat-icon class="space">timeline</mat-icon>
			<mat-icon class="space">today</mat-icon>
			<mat-icon class="space">track_changes</mat-icon>
			<mat-icon class="space">translate</mat-icon>
			<mat-icon class="space">trending_down</mat-icon>
			<mat-icon class="space">trending_flat</mat-icon>
		</mat-card>
	</mat-tab>
</mat-tab-group>
	`.trim();
	basicIconstssource : string = `
	import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'cdk-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
}
	`.trim();
	basicIconscsssource : string = `/** No CSS for this example */`.trim();
}